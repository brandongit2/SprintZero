import {z} from "zod"

import {genConverter, timestampSchema} from "~/types"

export const OldProductSchema = z.object({
	// General product info
	cadence: z.number(),
	createdAt: timestampSchema,
	effortCost: z.number().nullable(),
	effortCostCurrencySymbol: z.enum([`dollar`, `euro`, `pound`, `yen`, `rupee`]).nullable(),
	sprintStartDayOfWeek: z.number().int().min(0).max(6),
	members: z.record(
		z.string(),
		z.object({
			type: z.enum([`owner`, `editor`, `viewer`]),
		}),
	),
	name: z.string({invalid_type_error: `Required`}).min(1),

	// Kickoff info
	businessOutcomes: z.array(z.object({id: z.string(), text: z.string()})),
	marketLeaders: z.array(z.object({id: z.string(), text: z.string()})),
	potentialRisks: z.array(z.object({id: z.string(), text: z.string()})),
	problemStatement: z.string(),
	userPriorities: z.array(z.object({id: z.string(), text: z.string()})),

	// Accessibility info
	accessibility: z.object({
		auditory: z.tuple([z.boolean(), z.boolean(), z.boolean(), z.boolean(), z.boolean()]),
		cognitive: z.tuple([z.boolean(), z.boolean(), z.boolean(), z.boolean(), z.boolean(), z.boolean()]),
		physical: z.tuple([z.boolean(), z.boolean(), z.boolean(), z.boolean(), z.boolean()]),
		speech: z.tuple([z.boolean(), z.boolean()]),
		visual: z.tuple([
			z.boolean(),
			z.boolean(),
			z.boolean(),
			z.boolean(),
			z.boolean(),
			z.boolean(),
			z.boolean(),
			z.boolean(),
		]),
	}),

	// Vision info
	productType: z.enum([`mobile`, `tablet`, `desktop`, `watch`, `web`]),
	valueProposition: z.string({invalid_type_error: `Required`}).min(1, `Required`).nullable(),
	features: z
		.array(z.object({id: z.string(), text: z.string().min(1, `Required`)}))
		.min(1, `Required`)
		.nullable(),
	finalVision: z.string(),
	updates: z.array(
		z.object({
			id: z.string(),
			userId: z.string(),
			text: z.string(),
			timestamp: timestampSchema,
		}),
	),

	// Huddle info
	huddles: z.record(
		z.string(),
		z.object({
			updatedAt: timestampSchema,

			blockerStoryIds: z.array(z.string()),
			todayStoryIds: z.array(z.string()),
			yesterdayStoryIds: z.array(z.string()),
		}),
	),
})

export type Product = z.infer<typeof OldProductSchema>
export const ProductConverter = genConverter(OldProductSchema)
