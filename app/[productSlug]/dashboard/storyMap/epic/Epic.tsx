"use client"

import clsx from "clsx"
import {motion} from "framer-motion"
import {useAtom} from "jotai"
import {useEffect, useRef} from "react"

import type {FC} from "react"
import type {Id} from "~/types"
import type {Epic as EpicType} from "~/types/db/Products"

import {dragStateAtom, useGetEpic} from "../atoms"
import {elementRegistry, storyMapTop} from "../utils/globals"
import EpicContent from "./EpicContent"
import FeatureList from "./FeatureList"
import SmallAddFeatureButton from "./SmallAddFeatureButton"

export type EpicProps = {
	productId: Id
	epic: EpicType
	inert?: boolean
}

const Epic: FC<EpicProps> = ({productId, epic, inert = false}) => {
	const [dragState, setDragState] = useAtom(dragStateAtom)

	const features = useGetEpic(epic.id).features

	const containerRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (inert) return
		elementRegistry.epics[epic.id] = containerRef.current ?? undefined
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			elementRegistry.epics[epic.id] = containerRef.current ?? undefined
		}
	}, [epic.id, inert])

	return (
		<motion.div
			layoutId={dragState.id === epic.id ? undefined : `epic-${epic.id}`}
			className={clsx(`grid justify-items-center gap-x-4`, dragState.id === epic.id && !inert && `invisible`)}
			style={{gridTemplateColumns: `repeat(${features.length}, auto)`}}
			ref={containerRef}
		>
			<motion.div
				onPointerDown={(e) => void e.preventDefault()}
				onPanStart={(e, info) =>
					void setDragState((prev) => ({...prev, id: epic.id, type: `epic`, yOffset: info.point.y - storyMapTop}))
				}
				className="-m-4 cursor-grab touch-none p-4 transition-transform hover:scale-105"
			>
				<EpicContent productId={productId} epic={epic} />
			</motion.div>

			{/* Pad out the remaining columns in row 1 */}
			{Array(Math.max(features.length - 1, 0))
				.fill(undefined)
				.map((_, i) => (
					<div key={`row1-${i}`} />
				))}

			{/* Pad out the beginning columns in row 2 */}
			{Array(Math.max(features.length, 1))
				.fill(undefined)
				.map((_, i) => (
					<div key={`row2-${i}`} className="relative h-16 w-[calc(100%+1rem-2px)]">
						{/* Top */}
						{i === 0 && (
							<div className="absolute left-1/2 top-0 h-[calc(50%-2px)] w-px -translate-x-1/2 border border-dashed border-[#4f2dc8]" />
						)}
						{/* Right */}
						{i < features.length - 1 && (
							<div className="absolute left-1/2 top-1/2 h-px w-1/2 -translate-y-1/2 border border-dashed border-[#4f2dc8]" />
						)}
						{/* Bottom */}
						<div className="absolute left-1/2 top-1/2 h-1/2 w-px -translate-x-1/2 border border-dashed border-[#4f2dc8]" />
						{/* Left */}
						{i > 0 && (
							<div className="absolute left-0 top-1/2 h-px w-1/2 -translate-y-1/2 border border-dashed border-[#4f2dc8]" />
						)}

						{i === features.length - 1 && features.length > 0 && (
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
								<SmallAddFeatureButton productId={productId} epic={epic} />
							</div>
						)}
					</div>
				))}

			<FeatureList productId={productId} epic={epic} inert={inert} />
		</motion.div>
	)
}

export default Epic