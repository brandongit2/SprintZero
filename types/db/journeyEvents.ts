import {z, ZodTypeAny} from "zod"

import type {Id} from "~/types"

import {idSchema} from "~/types"

export type JourneyEvent = {
	id: Id

	description: string
	end: Date
	isDelighted: string
	level: number
	participants: Array<{
		label: string
		checked: boolean
	}>
	start: Date
	title: string

	journey: Id
}

export const JourneyEventSchema = z.object({
	id: idSchema,

	description: z.string(),
	end: z.date(),
	isDelighted: z.string(),
	level: z.number(),
	participants: z.array(
		z.object({
			label: z.string(),
			checked: z.boolean(),
		}),
	),
	start: z.date(),
	title: z.string(),

	journey: idSchema,
} satisfies {[key in keyof JourneyEvent]: ZodTypeAny})

export const JourneyEventCollectionSchema = z.array(JourneyEventSchema)