import {z} from "zod"

import {genConverter, genDbNames, idSchema} from "~/types"

export const ObjectiveSchema = z.object({
	name: z.string(),
	results: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
			text: z.string(),
		}),
	),
	title: z.string(),

	productId: idSchema,
})

export const Objectives = genDbNames(`Objectives`, ObjectiveSchema)
export type Objective = z.infer<typeof ObjectiveSchema>
export const ObjectiveConverter = genConverter(ObjectiveSchema)
