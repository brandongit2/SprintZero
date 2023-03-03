import {MinusCircleOutlined, ReadOutlined} from "@ant-design/icons"
import clsx from "clsx"
import {useEffect, useRef, useState} from "react"

import type {StoryMapMeta} from "./meta"
import type {FC} from "react"
import type {Id} from "~/types"

import {elementRegistry} from "./globals"
import {updateItem} from "~/utils/storyMap"

export type EpicProps = {
	meta: StoryMapMeta
	epicId: Id
	inert?: boolean
	isInitialRender?: boolean
}

const Epic: FC<EpicProps> = ({meta, epicId, inert = false, isInitialRender = false}) => {
	const epic = meta.epics.find((epic) => epic.id === epicId)!

	const contentRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (inert || !contentRef.current) return
		elementRegistry[epicId] = contentRef.current
		return () => {
			if (!contentRef.current) return
			elementRegistry[epicId] = contentRef.current // eslint-disable-line react-hooks/exhaustive-deps
		}
	}, [epicId, inert])

	const [localEpicName, setLocalEpicName] = useState(epic.name)
	useEffect(() => {
		setLocalEpicName(epic.name)
	}, [epic.name])

	const [hasBlurred, setHasBlurred] = useState(isInitialRender)

	return (
		<div
			className={clsx(
				`flex touch-none select-none items-center gap-2 rounded border border-current bg-bgContainer px-2 py-1 font-medium text-[#4f2dc8] dark:text-[#6b44f8]`,
				inert && `cursor-grabbing`,
				!meta.editMode && `cursor-grab active:cursor-grabbing`,
			)}
			ref={contentRef}
		>
			<ReadOutlined />
			{(hasBlurred || inert) && !meta.editMode ? (
				<p className="my-1 h-[1em]">{localEpicName}</p>
			) : (
				<div className="relative my-1 min-w-[1rem]">
					<p>{localEpicName || `_`}</p>
					<input
						value={localEpicName}
						autoFocus={!isInitialRender && !meta.editMode}
						onBlur={() => setHasBlurred(true)}
						onKeyDown={(e) => {
							if (e.key === `Enter`) setHasBlurred(true)
						}}
						className="absolute inset-0 rounded-sm bg-bgContainer focus:outline focus:outline-offset-1 focus:outline-primaryHover"
						onChange={(e) => {
							setLocalEpicName(e.target.value)
							updateItem(meta.storyMapState, epic.id, {name: e.target.value}, meta.allVersions).catch(console.error)
						}}
						onPointerDownCapture={(e) => e.stopPropagation()}
					/>
				</div>
			)}
			{meta.editMode && (
				<button
					type="button"
					onClick={() => {
						meta.markForDeletion(epicId)
						epic.childrenIds.forEach((featureId) => {
							meta.markForDeletion(featureId)
							const storyIds = meta.features.find((feature) => feature.id === featureId)!.childrenIds
							storyIds.forEach((storyId) => meta.markForDeletion(storyId))
						})
					}}
				>
					<MinusCircleOutlined className="text-sm text-error" />
				</button>
			)}
		</div>
	)
}

export default Epic
