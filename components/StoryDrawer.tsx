import {
	BlockOutlined,
	CloseOutlined,
	CodeOutlined,
	DislikeOutlined,
	DollarOutlined,
	FlagOutlined,
	LikeOutlined,
	LinkOutlined,
	NumberOutlined,
} from "@ant-design/icons"
import {zodResolver} from "@hookform/resolvers/zod"
import {Button, Checkbox, Drawer, Tag, Input, Form, Radio} from "antd"
import clsx from "clsx"
import {collection, query, where} from "firebase/firestore"
import produce from "immer"
import {nanoid} from "nanoid"
import {useEffect, useState} from "react"
import {useAuthState} from "react-firebase-hooks/auth"
import {useCollectionData} from "react-firebase-hooks/firestore"
import {useForm} from "react-hook-form"

import type {FC} from "react"
import type {z} from "zod"
import type {Id, WithDocumentData} from "~/types"
import type {Product} from "~/types/db/Products"
import type {StoryMapState} from "~/types/db/StoryMapStates"

import Comments from "~/components/Comments"
import LinkTo from "~/components/LinkTo"
import RhfInput from "~/components/rhf/RhfInput"
import RhfSegmented from "~/components/rhf/RhfSegmented"
import RhfSelect from "~/components/rhf/RhfSelect"
import {sprintColumns} from "~/types/db/Products"
import {StorySchema} from "~/types/db/StoryMapStates"
import {VersionConverter, Versions} from "~/types/db/Versions"
import {deleteStory, updateStory} from "~/utils/api/mutations"
import dollarFormat from "~/utils/dollarFormat"
import {auth, db} from "~/utils/firebase"
import {formValidateStatus} from "~/utils/formValidateStatus"
import {objectEntries, objectKeys} from "~/utils/objectMethods"

const formSchema = StorySchema.pick({
	branchName: true,
	designLink: true,
	name: true,
	pageLink: true,
	points: true,
	sprintColumn: true,
	versionId: true,
})
type FormInputs = z.infer<typeof formSchema>

export type StoryDrawerProps = {
	activeProduct: WithDocumentData<Product>
	storyMapState: WithDocumentData<StoryMapState>
	storyId: string
	isOpen: boolean
	onClose: () => void
	hideAdjudicationResponse?: boolean
	hideAcceptanceCriteria?: boolean
	disableEditing?: boolean
}

const StoryDrawer: FC<StoryDrawerProps> = ({
	activeProduct,
	storyMapState,
	storyId,
	isOpen,
	onClose,
	hideAdjudicationResponse,
	hideAcceptanceCriteria,
	disableEditing,
}) => {
	const [user] = useAuthState(auth)
	const [editMode, setEditMode] = useState(false)
	const [newAcceptanceCriterion, setNewAcceptanceCriterion] = useState(``)
	const story = storyMapState.stories.find((story) => story.id === storyId)!
	const [description, setDescription] = useState(story.description)

	useEffect(() => {
		setDescription(story.description)
	}, [story.description])

	const {control, handleSubmit, getFieldState, formState} = useForm<FormInputs>({
		mode: `onChange`,
		resolver: zodResolver(formSchema),
		defaultValues: {
			branchName: story.branchName,
			designLink: story.designLink,
			name: story.name,
			pageLink: story.pageLink,
			points: story.points,
			sprintColumn: story.sprintColumn,
			versionId: story.versionId,
		},
	})

	const onSubmit = handleSubmit((data) => {
		updateStory({storyMapState, storyId: story.id, data})
		setEditMode(false)
	})

	const [versions] = useCollectionData(
		query(collection(db, Versions._), where(Versions.productId, `==`, activeProduct.id)).withConverter(
			VersionConverter,
		),
	)

	const toggleAcceptanceCriterion = (id: string, checked: boolean) => {
		const newAcceptanceCriteria = produce(story.acceptanceCriteria, (draft) => {
			const index = draft.findIndex((criterion) => criterion.id === id)
			draft[index]!.checked = checked
		})
		updateStory({
			storyMapState,
			storyId: story.id,
			data: {
				acceptanceCriteria: newAcceptanceCriteria,
			},
		})
	}

	const addAcceptanceCriterion = () => {
		updateStory({
			storyMapState,
			storyId: story.id,
			data: {
				acceptanceCriteria: [...story.acceptanceCriteria, {id: nanoid(), name: newAcceptanceCriterion, checked: false}],
			},
		})
	}

	const addVote = (vote: boolean) => {
		if (!user) return
		const ethicsVotes = story.ethicsVotes.filter((vote) => vote.userId !== user.uid)
		ethicsVotes.push({userId: user.uid as Id, vote})
		const votingComplete = ethicsVotes.length === objectKeys(activeProduct!.members).length

		let ethicsColumn: `identified` | `underReview` | `adjudicated` = `identified`
		if (ethicsVotes.length === 1) ethicsColumn = `underReview`
		if (votingComplete) ethicsColumn = `adjudicated`

		updateStory({
			storyMapState,
			storyId: story.id,
			data: {
				ethicsApproved: votingComplete
					? ethicsVotes.filter((vote) => vote.vote === true).length >
					  ethicsVotes.filter((vote) => vote.vote === false).length
					: null,
				ethicsColumn,
				ethicsVotes,
			},
		})
	}

	return (
		<Drawer
			title={
				<div className="flex h-14 flex-col justify-center gap-1">
					{!editMode && <p>{story.name}</p>}
					<div>
						{editMode ? (
							<Button
								type="primary"
								danger
								onClick={() =>
									void deleteStory({
										storyMapState,
										storyId: story.id,
									})
								}
							>
								Delete
							</Button>
						) : (
							<div className="relative">
								<div>
									<Tag color="#585858" icon={<NumberOutlined />}>
										{story.points} point{story.points === 1 ? `` : `s`}
									</Tag>
									<Tag
										color={typeof activeProduct.effortCost === `number` ? `#585858` : `#f5f5f5`}
										icon={<DollarOutlined />}
										className={clsx(
											typeof activeProduct.effortCost !== `number` && `border !border-current !text-[#d9d9d9]`,
										)}
									>
										{dollarFormat((activeProduct.effortCost ?? 0) * story.points)}
									</Tag>
									<Tag color="#585858" icon={<FlagOutlined />}>
										{sprintColumns[story.sprintColumn]}
									</Tag>
								</div>

								<div className="absolute left-96 top-0">
									<Tag
										color={story.branchName ? `#0958d9` : `#f5f5f5`}
										icon={<CodeOutlined />}
										style={story.branchName ? {} : {color: `#d9d9d9`, border: `1px solid currentColor`}}
									>
										{story.branchName ?? `No branch`}
									</Tag>
									<LinkTo href={story.designLink} openInNewTab>
										<Tag
											color={story.designLink ? `#0958d9` : `#f5f5f5`}
											icon={<BlockOutlined />}
											style={story.designLink ? {} : {color: `#d9d9d9`, border: `1px solid currentColor`}}
										>
											Design
										</Tag>
									</LinkTo>
									<LinkTo href={story.pageLink} openInNewTab>
										<Tag
											color={story.pageLink ? `#0958d9` : `#f5f5f5`}
											icon={<LinkOutlined />}
											style={story.pageLink ? {} : {color: `#d9d9d9`, border: `1px solid currentColor`}}
										>
											Page
										</Tag>
									</LinkTo>
								</div>
							</div>
						)}
					</div>
				</div>
			}
			placement="bottom"
			closable={false}
			height={500}
			extra={
				<div className="flex items-center gap-4">
					{editMode ? (
						<>
							<Button onClick={() => void setEditMode(false)}>Cancel</Button>
							<Button type="primary" htmlType="submit" form="story-form" className="bg-green-s500">
								Done
							</Button>
						</>
					) : (
						!disableEditing && (
							<>
								<button type="button" onClick={() => void setEditMode(true)} className="ml-1 text-sm text-[#1677ff]">
									Edit
								</button>
								<button type="button" onClick={() => void onClose()}>
									<CloseOutlined />
								</button>
							</>
						)
					)}
				</div>
			}
			open={isOpen}
			onClose={() => void onClose()}
		>
			{editMode ? (
				<Form id="story-form" layout="vertical" className="space-y-4" onFinish={onSubmit}>
					<div className="flex gap-8">
						<Form.Item
							label="Title"
							hasFeedback
							validateStatus={formValidateStatus(getFieldState(`name`, formState))}
							className="grow"
						>
							<RhfInput control={control} name="name" />
						</Form.Item>
						<Form.Item
							label="Effort Estimate"
							hasFeedback
							validateStatus={formValidateStatus(getFieldState(`points`, formState))}
						>
							<RhfSegmented control={control} name="points" options={[1, 2, 3, 5, 8, 13]} />
						</Form.Item>
						<Form.Item label="Version">
							<RhfSelect
								control={control}
								name="versionId"
								options={versions?.map((version) => ({label: version.name, value: version.id}))}
							/>
						</Form.Item>
						<Form.Item label="Status" className="shrink-0 basis-56">
							<RhfSelect
								control={control}
								name="sprintColumn"
								options={objectEntries(sprintColumns).map(([key, value]) => ({label: value, value: key}))}
							/>
						</Form.Item>
					</div>
					<Form.Item
						label="Design"
						hasFeedback
						validateStatus={formValidateStatus(getFieldState(`designLink`, formState))}
						help={formState.errors.designLink?.message}
					>
						<RhfInput control={control} name="designLink" placeholder="https://" />
					</Form.Item>
					<Form.Item
						label="Branch"
						hasFeedback
						validateStatus={formValidateStatus(getFieldState(`branchName`, formState))}
						help={formState.errors.branchName?.message}
					>
						<RhfInput control={control} name="branchName" />
					</Form.Item>
					<Form.Item
						label="Page"
						hasFeedback
						validateStatus={formValidateStatus(getFieldState(`pageLink`, formState))}
						help={formState.errors.pageLink?.message}
					>
						<RhfInput control={control} name="pageLink" placeholder="https://" />
					</Form.Item>
				</Form>
			) : (
				<div className="grid h-full grid-cols-2 gap-8">
					{/* Left column */}
					<div className="flex h-full min-h-0 flex-col gap-6">
						{!hideAdjudicationResponse && (
							<div className="space-y-2">
								{story.ethicsApproved === null ? (
									<>
										<div>
											<p className="text-xl font-semibold">Adjudication Response</p>
											<p className="text-xs">
												Do you think this would provide value and reaffirm the commitment to our users?
											</p>
										</div>

										<Radio.Group onChange={(e) => void addVote(e.target.value === `allow`)}>
											<Radio value="allow">Allow</Radio>
											<Radio value="reject">Reject</Radio>
										</Radio.Group>
									</>
								) : (
									<>
										<p className="text-xl font-semibold">Adjudication Response</p>
										{story.ethicsApproved ? (
											<div className="inline-flex items-center gap-2 bg-[#90D855] py-2 px-4">
												<LikeOutlined />
												Allowed
											</div>
										) : (
											<div className="inline-flex items-center gap-2 bg-[#FFA39E] py-2 px-4">
												<DislikeOutlined />
												Rejected
											</div>
										)}
									</>
								)}
							</div>
						)}
						<div className="max-h-[calc(100%-8rem)] space-y-2">
							<p className="text-xl font-semibold text-[#595959]">Story</p>
							<Input.TextArea
								rows={4}
								value={description}
								onChange={(e) => {
									setDescription(e.target.value)
									updateStory({
										storyMapState,
										storyId: story.id,
										data: {
											description: e.target.value,
										},
									})
								}}
								className="max-h-[calc(100%-2.25rem)]"
							/>
						</div>

						{!hideAcceptanceCriteria && (
							<div className="flex min-h-0 flex-1 flex-col gap-2">
								<p className="text-xl font-semibold text-[#595959]">Acceptance Criteria</p>
								<div className="flex min-h-0 flex-1 flex-col flex-wrap gap-2 overflow-x-auto p-0.5">
									{story.acceptanceCriteria.map((criterion) => (
										<Checkbox
											key={criterion.id}
											checked={criterion.checked}
											onChange={(e) => void toggleAcceptanceCriterion(criterion.id, e.target.checked)}
											style={{marginLeft: `0px`}}
										>
											{criterion.name}
										</Checkbox>
									))}
									<form
										onSubmit={(e) => {
											e.preventDefault()
											addAcceptanceCriterion()
											setNewAcceptanceCriterion(``)
										}}
									>
										<Input
											size="small"
											placeholder="Add item"
											value={newAcceptanceCriterion}
											onChange={(e) => void setNewAcceptanceCriterion(e.target.value)}
											className="w-40"
										/>

										<input type="submit" hidden />
									</form>
								</div>
							</div>
						)}
					</div>

					{/* Right column */}
					<div className="flex h-full flex-col gap-2">
						<p className="text-xl font-semibold text-[#595959]">Comments</p>
						<div className="relative grow">
							<Comments
								commentList={story.commentIds}
								onCommentListChange={(newCommentList) =>
									void updateStory({
										storyMapState,
										storyId: story.id,
										data: {
											commentIds: newCommentList,
										},
									})
								}
								flagged={story.ethicsColumn !== null}
								onFlag={() =>
									void updateStory({
										storyMapState,
										storyId: story.id,
										data: {ethicsColumn: `identified`},
									})
								}
							/>
						</div>
					</div>
				</div>
			)}
		</Drawer>
	)
}

export default StoryDrawer
