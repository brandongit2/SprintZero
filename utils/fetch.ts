import {addDoc, collection, getDocs, orderBy, query, where} from "firebase9/firestore"

import type {Product} from "~/types/db/Product"
import type {Version} from "~/types/db/Versions"

import {db} from "~/config/firebase"
import {EpicSchema} from "~/types/db/Epics"
import {ProductCollectionSchema} from "~/types/db/Product"
import {VersionSchema, VersionCollectionSchema} from "~/types/db/Versions"

export const getAllProducts = (userId: string) => async (): Promise<Product[]> => {
	const _data = await getDocs(query(collection(db, `Product`), where(`owner`, `==`, userId), orderBy(`product`)))
	const data = ProductCollectionSchema.parse(_data.docs.map((doc) => ({id: doc.id, ...doc.data()})))
	return data
}

export const getAllVersions = (productId: string | null) => async (): Promise<Version[]> => {
	const _data = await getDocs(
		query(collection(db, `Versions`), where(`product_id`, `==`, productId), orderBy(`version`)),
	)
	const data = VersionCollectionSchema.parse(_data.docs.map((doc) => ({id: doc.id, ...doc.data()})))
	return data
}

export const addVersion =
	(productId: string) =>
	async (versionName: string): Promise<void> => {
		const existingDoc = (
			await getDocs(
				query(collection(db, `Versions`), where(`product_id`, `==`, productId), where(`version`, `==`, versionName)),
			)
		).docs[0]
		if (existingDoc) throw new Error(`Version name taken.`)

		const data = VersionSchema.omit({id: true}).parse({version: versionName, product_id: productId})
		await addDoc(collection(db, `Versions`), data)
	}

type AddEpicInput = {
	name: string
	description: string
}
export const addEpic =
	(productId: string) =>
	async ({name, description}: AddEpicInput): Promise<void> => {
		const data = EpicSchema.pick({id: true, name: true, description: true, product_id: true}).parse({
			name,
			description,
			product_id: productId,
		})
	}