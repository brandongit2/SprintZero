import {
	CloseOutlined,
	EyeOutlined,
	FlagOutlined,
	MailOutlined,
	PhoneOutlined,
	PushpinOutlined,
	SoundOutlined,
	SyncOutlined,
} from "@ant-design/icons"
import {zodResolver} from "@hookform/resolvers/zod"
import {Button, Drawer, Tag} from "antd"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import {Timestamp, collection, doc, updateDoc} from "firebase/firestore"
import {useEffect, useState} from "react"
import {useErrorHandler} from "react-error-boundary"
import {useCollection, useDocument} from "react-firebase-hooks/firestore"
import {useForm} from "react-hook-form"

import type {QuerySnapshot} from "firebase/firestore"
import type {FC} from "react"
import type {z} from "zod"
import type {DialogueParticipant} from "~/types/db/Products/DialogueParticipants"

import ParticipantEditForm from "./ParticipantEditForm"
import {useAppContext} from "~/app/(authenticated)/[productSlug]/AppContext"
import RhfInput from "~/components/rhf/RhfInput"
import RhfSelect from "~/components/rhf/RhfSelect"
import RhfTextArea from "~/components/rhf/RhfTextArea"
import {DialogueParticipantSchema, statuses, timings} from "~/types/db/Products/DialogueParticipants"
import {MemberConverter} from "~/types/db/Products/Members"
import {PersonaConverter} from "~/types/db/Products/Personas"
import BoneIcon from "~public/icons/bone.svg"
import CognitionIcon from "~public/icons/cognition.svg"
import EarIcon from "~public/icons/ear.svg"

dayjs.extend(relativeTime)

const formSchema = DialogueParticipantSchema.pick({
	availability: true,
	email: true,
	name: true,
	phoneNumber: true,
	title: true,
	transcript: true,
	personaId: true,
})
type FormInputs = z.infer<typeof formSchema>

export type ParticipantDrawerProps = {
	participants: QuerySnapshot<DialogueParticipant> | undefined
	activeParticipant: string | undefined
	onClose: () => void
}

const ParticipantDrawer: FC<ParticipantDrawerProps> = ({participants, activeParticipant, onClose}) => {
	const {product} = useAppContext()

	const [isOpen, setIsOpen] = useState(true)
	const close = () => {
		setIsOpen(false)
		setTimeout(() => {
			onClose()
		}, 300)
	}

	const [isEditing, setIsEditing] = useState(false)
	const participant = participants?.docs.find((participant) => participant.id === activeParticipant)
	const participantData = participant?.data()

	const [personas, , personasError] = useCollection(collection(product.ref, `Personas`).withConverter(PersonaConverter))
	useErrorHandler(personasError)
	const [lastUpdatedAtUser, , lastUpdatedAtUserError] = useDocument(
		participant?.data().updatedAtUserId
			? doc(product.ref, `Members`, participant.data().updatedAtUserId).withConverter(MemberConverter)
			: undefined,
	)
	useErrorHandler(lastUpdatedAtUserError)

	const {control, handleSubmit, setValue} = useForm<FormInputs>({
		mode: `onChange`,
		resolver: zodResolver(formSchema),
		shouldFocusError: false,
		defaultValues: {
			availability: participantData?.availability ?? [],
			email: participantData?.email ?? null,
			name: participantData?.name ?? `New Participant`,
			phoneNumber: participantData?.phoneNumber ?? null,
			title: participantData?.title ?? null,
			transcript: participantData?.transcript ?? ``,
			personaId: participantData?.personaId ?? null,
		},
	})

	const onSubmit = handleSubmit(async (data) => {
		if (!activeParticipant) return
		await updateDoc(doc(product.ref, `DialogueParticipants`, activeParticipant), {
			...data,
			updatedAt: Timestamp.now(),
		})
	})

	useEffect(() => {
		if (!participantData) return
		setValue(`transcript`, participantData.transcript)
		setValue(`name`, participantData.name)
		setValue(`email`, participantData.email)
		setValue(`phoneNumber`, participantData.phoneNumber)
	}, [participantData, setValue])

	return (
		<Drawer
			placement="bottom"
			closable={false}
			height={440}
			open={isOpen}
			onClose={close}
			title={
				isEditing ? (
					<Button type="primary" danger>
						Delete
					</Button>
				) : (
					<div className="mr-4 flex min-w-0 max-w-full flex-col gap-1 overflow-auto">
						<p className="max-w-full leading-none">
							<span className="mr-4 inline-block max-w-full truncate font-semibold">{participant?.data().name}</span>
							{participant && (
								<span className="mb-0.5 text-sm font-normal text-textTertiary">
									Last modified {dayjs(participant.data().updatedAt.toMillis()).fromNow()}
									{lastUpdatedAtUser?.data() && ` by ${lastUpdatedAtUser.data()!.name}`}
								</span>
							)}
						</p>
						<div className="flex gap-2">
							{participantData?.location && (
								<Tag color="#585858" icon={<PushpinOutlined />}>
									{participantData.location}
								</Tag>
							)}
							{participantData?.status && (
								<Tag color="#585858" icon={<FlagOutlined />}>
									{statuses.find((status) => status[0] === participantData.status)![1]}
								</Tag>
							)}
							{participantData?.disabilities.auditory && (
								<Tag color="#585858" icon={<EarIcon className="mr-1.5 inline-block" />} className="flex items-center">
									Auditory
								</Tag>
							)}
							{participantData?.disabilities.cognitive && (
								<Tag
									color="#585858"
									icon={<CognitionIcon className="mr-1.5 inline-block" />}
									className="flex items-center"
								>
									Cognitive
								</Tag>
							)}
							{participantData?.disabilities.physical && (
								<Tag color="#585858" icon={<BoneIcon className="mr-1.5 inline-block" />} className="flex items-center">
									Physical
								</Tag>
							)}
							{participantData?.disabilities.speech && (
								<Tag color="#585858" icon={<SoundOutlined />}>
									Speech
								</Tag>
							)}
							{participantData?.disabilities.visual && (
								<Tag color="#585858" icon={<EyeOutlined />}>
									Visual
								</Tag>
							)}
							{participantData?.timing && (
								<Tag color="#585858" icon={<SyncOutlined />}>
									{timings.find((timing) => timing[0] === participantData.timing)![1]}
								</Tag>
							)}
						</div>
					</div>
				)
			}
			extra={
				isEditing ? (
					<div className="flex gap-2">
						<Button onClick={() => setIsEditing(false)}>Cancel</Button>
						<Button type="primary" htmlType="submit" form="participant-form">
							Save
						</Button>
					</div>
				) : (
					<div className="flex gap-4">
						<Button
							onClick={() => {
								setIsEditing(true)
							}}
						>
							Edit
						</Button>
						<button type="button" onClick={close}>
							<CloseOutlined />
						</button>
					</div>
				)
			}
		>
			{isEditing && participant ? (
				<ParticipantEditForm participant={participant} onFinish={close} />
			) : (
				<form className="grid h-full grid-cols-[2fr_1fr] gap-6">
					<div className="flex flex-col gap-2">
						<p className="text-lg font-semibold">Interview Transcript</p>
						<RhfTextArea
							control={control}
							name="transcript"
							onChange={() => {
								onSubmit().catch(console.error)
							}}
							wrapperClassName="grow"
							className="!h-full !resize-none"
						/>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<p className="text-lg font-semibold">Contact</p>
							<label className="leading-normal">
								<span className="text-sm text-textTertiary">Name</span>
								<RhfInput
									control={control}
									name="name"
									onChange={() => {
										onSubmit().catch(console.error)
									}}
									addonBefore={
										<RhfSelect
											control={control}
											name="title"
											onChange={() => {
												onSubmit().catch(console.error)
											}}
											className="w-[78px]"
											options={[
												{label: `Dr.`, value: `dr`},
												{label: `Miss`, value: `miss`},
												{label: `Mr.`, value: `mr`},
												{label: `Mrs.`, value: `mrs`},
												{label: `Ms.`, value: `ms`},
												{label: `Prof.`, value: `prof`},
												{label: `Sir`, value: `sir`},
											]}
										/>
									}
								/>
							</label>
							<label className="leading-normal">
								<span className="text-sm text-textTertiary">Email Address</span>
								<RhfInput
									control={control}
									name="email"
									onChange={() => {
										onSubmit().catch(console.error)
									}}
									addonBefore={
										<div className="w-14">
											<MailOutlined />
										</div>
									}
								/>
							</label>
							<div className="flex flex-col gap-1">
								<label className="leading-normal">
									<span className="text-sm text-textTertiary">Phone Number</span>
									<RhfInput
										control={control}
										name="phoneNumber"
										onChange={() => {
											onSubmit().catch(console.error)
										}}
										addonBefore={
											<div className="w-14">
												<PhoneOutlined />
											</div>
										}
									/>
								</label>
								<RhfSelect
									control={control}
									name="availability"
									size="small"
									mode="multiple"
									onChange={() => {
										onSubmit().catch(console.error)
									}}
									className="w-full"
									options={[
										{label: `9am - 5pm only`, value: `95only`},
										{label: `Email`, value: `email`},
										{label: `Phone`, value: `phone`},
										{label: `Text`, value: `text`},
										{label: `Weekdays only`, value: `weekdays`},
										{label: `Weekends only`, value: `weekends`},
									]}
								/>
							</div>
							<label className="leading-normal">
								<span className="text-sm text-textTertiary">Persona</span>
								<RhfSelect
									control={control}
									name="personaId"
									onChange={() => {
										onSubmit().catch(console.error)
									}}
									options={
										personas ? personas.docs.map((persona) => ({label: persona.data().name, value: persona.id})) : []
									}
									className="w-full [contain:inline-size]"
								/>
							</label>
						</div>
					</div>
				</form>
			)}
		</Drawer>
	)
}

export default ParticipantDrawer
