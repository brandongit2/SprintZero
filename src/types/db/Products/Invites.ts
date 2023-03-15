import {z} from "zod"

import {genConverter} from "~/types"

export const InviteSchema = z.object({
	email: z.string(),
	userType: z.string(),

	// This is necessary since it's not possible to query Invites across Products by ID in Firestore.
	id: z.string(),
})

export type Invite = z.infer<typeof InviteSchema>
export const InviteConverter = genConverter(InviteSchema)
