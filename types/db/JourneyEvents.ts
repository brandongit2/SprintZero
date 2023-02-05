import {z} from "zod"

import {genConverter, genDbNames} from "~/types"

export const JourneyEventSchema = z.object({
	description: z.string(),
	emotion: z.enum([`frustrated`, `delighted`]),
	emotionLevel: z.number().int().min(0).max(100),
	end: z.number(),
	start: z.number(),
	subject: z.string(),
})

export const JourneyEvents = genDbNames(`JourneyEvents`, JourneyEventSchema)
export type JourneyEvent = z.infer<typeof JourneyEventSchema>
export const JourneyEventConverter = genConverter(JourneyEventSchema)
