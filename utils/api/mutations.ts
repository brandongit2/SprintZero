import {addDoc, collection, doc, getDocs, query, updateDoc, where} from "firebase9/firestore"
import produce from "immer"
import {nanoid} from "nanoid"

import type {Id} from "~/types"
import type {InputState} from "~/types/db/InputStates"
import type {Epic, Feature, Product, Story, StoryMapState} from "~/types/db/Products"
import type {Version} from "~/types/db/Versions"

import {getProduct} from "./queries"
import {db} from "~/config/firebase"
import {InputStates} from "~/types/db/InputStates"
import {Products} from "~/types/db/Products"
import {Versions} from "~/types/db/Versions"

type AddVersionVars = {
	productId: Id
	versionName: string
}

export const addVersion = async ({productId, versionName}: AddVersionVars): Promise<void> => {
	const existingDoc = (
		await getDocs(
			query(
				collection(db, Versions._),
				where(Versions.product, `==`, productId),
				where(Versions.name, `==`, versionName),
			),
		)
	).docs[0]
	if (existingDoc) throw new Error(`Version already exists.`)

	const data: Omit<Version, `id`> = {
		name: versionName,
		product: productId,
	}
	await addDoc(collection(db, Versions._), data)
}

type AddEpicVars = {
	productId: Id
	data: Partial<Epic>
	position?: number
}

export const addEpic = async ({productId, data: initialData, position}: AddEpicVars): Promise<void> => {
	const id = nanoid() as Id
	const data: Epic = {
		id,
		description: ``,
		name: ``,
		priority_level: 0,
		visibility_level: 0,
		comments: [],
		keepers: [],
		nameInputStateId: await createInputState(),
		features: [],
		...initialData,
	}

	let storyMapState = (await getProduct(productId)()).storyMapState
	storyMapState.epics.splice(position ?? Infinity, 0, data)

	await updateDoc(doc(db, Products._, productId), {storyMapState})
}

type UpdateEpicVars = {
	productId: Id
	epicId: Id
	data: Partial<Pick<Epic, `description` | `name` | `priority_level` | `visibility_level` | `comments` | `keepers`>>
}

export const updateEpic = async ({productId, epicId, data}: UpdateEpicVars): Promise<void> => {
	let storyMapState = (await getProduct(productId)()).storyMapState
	storyMapState = produce(storyMapState, (state) => {
		const epicIndex = state.epics.findIndex(({id}) => id === epicId)
		state.epics[epicIndex] = {
			...state.epics[epicIndex]!,
			...data,
		}
	})
	await updateDoc(doc(db, Products._, productId), {storyMapState})
}

type DeleteEpicVars = {
	productId: Id
	epicId: Id
}

export const deleteEpic = async ({productId, epicId}: DeleteEpicVars): Promise<void> => {
	const product = await getProduct(productId)()

	updateDoc(doc(db, Products._, product.id), {
		storyMapState: {epics: product.storyMapState.epics.filter(({id}) => id !== epicId)},
	} satisfies Partial<Product>)
}

type AddFeatureVars = {
	productId: Id
	epicId: Id
	data: Partial<Feature>
	position?: number
}

export const addFeature = async ({productId, epicId, data: initialData, position}: AddFeatureVars): Promise<void> => {
	const id = nanoid() as Id
	const data: Feature = {
		id,
		description: ``,
		name: ``,
		priority_level: 0,
		visibility_level: 0,
		comments: [],
		nameInputStateId: await createInputState(),
		stories: [],
		...initialData,
	}

	let storyMapState = (await getProduct(productId)()).storyMapState
	storyMapState = produce(storyMapState, (state) => {
		const epicIndex = state.epics.findIndex(({id}) => id === epicId)
		state.epics[epicIndex]!.features.splice(position ?? Infinity, 0, data)
	})
	await updateDoc(doc(db, Products._, productId), {storyMapState})
}

type DeleteFeatureVars = {
	productId: Id
	epicId: Id
	featureId: Id
}

export const deleteFeature = async ({productId, epicId, featureId}: DeleteFeatureVars): Promise<void> => {
	let storyMapState = (await getProduct(productId)()).storyMapState
	storyMapState = produce(storyMapState, (state) => {
		const epicIndex = state.epics.findIndex(({id}) => id === epicId)
		state.epics[epicIndex]!.features = state.epics[epicIndex]!.features.filter(({id}) => id !== featureId)
	})
	updateDoc(doc(db, Products._, productId), {storyMapState})
}

type UpdateFeatureVars = {
	productId: Id
	epicId: Id
	featureId: Id
	data: Partial<Pick<Feature, `description` | `name` | `comments`>>
}

export const updateFeature = async ({productId, epicId, featureId, data}: UpdateFeatureVars): Promise<void> => {
	let storyMapState = (await getProduct(productId)()).storyMapState
	storyMapState = produce(storyMapState, (state) => {
		const epicIndex = state.epics.findIndex(({id}) => id === epicId)
		const featureIndex = state.epics[epicIndex]!.features.findIndex(({id}) => id === featureId)
		state.epics[epicIndex]!.features[featureIndex] = {
			...state.epics[epicIndex]!.features[featureIndex]!,
			...data,
		}
	})
	await updateDoc(doc(db, Products._, productId), {storyMapState})
}

type AddStoryVars = {
	productId: Id
	epicId: Id
	featureId: Id
	data: Partial<Story> & {versionId: Id}
	position?: number
}

export const addStory = async ({
	productId,
	epicId,
	featureId,
	data: initialData,
	position,
}: AddStoryVars): Promise<void> => {
	const id = nanoid() as Id
	const data: Story = {
		id,
		acceptance_criteria: [],
		code_link: null,
		description: ``,
		design_link: null,
		name: ``,
		points: 0,
		priority_level: 0,
		visibility_level: 0,
		comments: [],
		nameInputStateId: await createInputState(),
		...initialData,
	}

	let storyMapState = (await getProduct(productId)()).storyMapState
	storyMapState = produce(storyMapState, (state) => {
		const epicIndex = state.epics.findIndex(({id}) => id === epicId)
		const featureIndex = state.epics[epicIndex]!.features.findIndex(({id}) => id === featureId)
		state.epics[epicIndex]!.features[featureIndex]!.stories.splice(position ?? Infinity, 0, data)
	})
	await updateDoc(doc(db, Products._, productId), {storyMapState})
}

type DeleteStoryVars = {
	productId: Id
	epicId: Id
	featureId: Id
	storyId: Id
}

export const deleteStory = async ({productId, epicId, featureId, storyId}: DeleteStoryVars): Promise<void> => {
	let storyMapState = (await getProduct(productId)()).storyMapState
	storyMapState = produce(storyMapState, (state) => {
		const epicIndex = state.epics.findIndex(({id}) => id === epicId)
		const featureIndex = state.epics[epicIndex]!.features.findIndex(({id}) => id === featureId)
		state.epics[epicIndex]!.features[featureIndex]!.stories = state.epics[epicIndex]!.features[
			featureIndex
		]!.stories.filter(({id}) => id !== storyId)
	})
	await updateDoc(doc(db, Products._, productId), {storyMapState})
}

type UpdateStoryVars = {
	productId: Id
	epicId: Id
	featureId: Id
	storyId: Id
	data: Partial<
		Pick<Story, `acceptance_criteria` | `code_link` | `description` | `design_link` | `name` | `points` | `versionId`>
	>
}

export const updateStory = async ({productId, epicId, featureId, storyId, data}: UpdateStoryVars): Promise<void> => {
	let storyMapState = (await getProduct(productId)()).storyMapState
	storyMapState = produce(storyMapState, (state) => {
		const epicIndex = state.epics.findIndex(({id}) => id === epicId)
		const featureIndex = state.epics[epicIndex]!.features.findIndex(({id}) => id === featureId)
		const storyIndex = state.epics[epicIndex]!.features[featureIndex]!.stories.findIndex(({id}) => id === storyId)
		state.epics[epicIndex]!.features[featureIndex]!.stories[storyIndex] = {
			...state.epics[epicIndex]!.features[featureIndex]!.stories[storyIndex]!,
			...data,
		}
	})
	await updateDoc(doc(db, Products._, productId), {storyMapState})
}

export const createInputState = async (): Promise<Id> =>
	(
		await addDoc(collection(db, InputStates._), {
			selections: {},
		} satisfies Omit<InputState, `id`>)
	).id as Id

type UpdateInputStateVars = {
	id: Id
	inputState: InputState[`selections`][string]
	userId: Id
}

export const updateInputState = async ({id, inputState, userId}: UpdateInputStateVars): Promise<void> => {
	await updateDoc(doc(db, InputStates._, id), {[`${InputStates.selections}.${userId}`]: inputState})
}

type SetStoryMapStateVars = {
	productId: Id
	storyMapState: StoryMapState
}

export const setStoryMapState = async ({productId, storyMapState}: SetStoryMapStateVars): Promise<void> =>
	await updateDoc(doc(db, Products._, productId), {storyMapState})