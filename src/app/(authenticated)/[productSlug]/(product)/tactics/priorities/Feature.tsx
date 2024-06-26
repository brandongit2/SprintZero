"use client"

import {CopyOutlined} from "@ant-design/icons"
import {Timestamp, doc, updateDoc} from "firebase/firestore"
import {motion, useMotionTemplate, useMotionValue} from "framer-motion"
import {clamp, debounce} from "lodash"
import {useEffect, useRef} from "react"

import type {DocumentReference, WithFieldValue} from "firebase/firestore"
import type {FC} from "react"
import type {StoryMapItem} from "~/types/db/Products/StoryMapItems"

import {matrixRect} from "./globals"
import {useAppContext} from "../../../AppContext"
import {StoryMapItemConverter} from "~/types/db/Products/StoryMapItems"
import {getFeatures} from "~/utils/storyMap"

export type FeatureProps = {
	storyMapItems: StoryMapItem[]
	featureId: string
}

const Feature: FC<FeatureProps> = ({storyMapItems, featureId}) => {
	const {product} = useAppContext()
	const features = getFeatures(storyMapItems)
	const feature = features.find(({id}) => id === featureId)!

	const x = useMotionValue(feature.effort)
	const y = useMotionValue(feature.userValue)

	useEffect(() => {
		x.set(feature.effort)
		y.set(feature.userValue)
	}, [feature, x, y])

	const ref = useRef<HTMLDivElement | null>(null)
	const pointerOffset = useRef<[number, number]>([0, 0])
	const moveFeature = async (x: number, y: number) => {
		await debouncedUpdateStoryMapItem(
			doc(product.ref, `StoryMapItems`, feature.id).withConverter(StoryMapItemConverter),
			{
				effort: x,
				userValue: y,
			},
		)
	}

	return (
		<motion.div
			key={feature.id}
			onPointerDown={(e) => {
				const boundingBox = ref.current!.getBoundingClientRect()
				const center = [boundingBox.left + boundingBox.width / 2, boundingBox.top + boundingBox.height / 2] as const
				pointerOffset.current = [e.clientX - center[0], e.clientY - center[1]]
			}}
			onPan={(e, info) => {
				let newX = (info.point.x - pointerOffset.current[0] - matrixRect.current.left) / matrixRect.current.width
				newX = clamp(newX, 0, 1)
				let newY = (info.point.y - pointerOffset.current[1] - matrixRect.current.top) / matrixRect.current.height
				newY = clamp(newY, 0, 1)

				x.set(newX)
				y.set(newY)
				moveFeature(newX, newY).catch(console.error)
			}}
			className="absolute flex min-w-[4rem] -translate-x-1/2 -translate-y-1/2 cursor-grab touch-none select-none items-center gap-2 rounded-md border border-current bg-bgContainer px-2 py-1 text-[#006378] dark:text-[#00a2c4]"
			style={{top: useMotionTemplate`calc(${y}% * 100)`, left: useMotionTemplate`calc(${x}% * 100)`}}
			ref={ref}
		>
			<CopyOutlined />
			<p className="w-max font-medium">{feature.name}</p>
		</motion.div>
	)
}

export default Feature

const debouncedUpdateStoryMapItem = debounce(
	async (storyMapItemRef: DocumentReference<StoryMapItem>, data: WithFieldValue<Partial<StoryMapItem>>) => {
		await updateDoc(storyMapItemRef, {
			...data,
			updatedAt: Timestamp.now(),
		})
	},
	100,
)
