import type {QuerySnapshot} from "firebase/firestore"
import type {Id} from "~/types"
import type {Epic, Feature, Story, StoryMapState} from "~/types/db/StoryMapStates"
import type {Version} from "~/types/db/Versions"

export type EpicWithId = Epic & {id: Id}

export const getEpics = (storyMapItems: StoryMapState[`items`]): EpicWithId[] => {
	const epics = Object.entries(storyMapItems)
		.filter(([, item]) => item?.type === `epic`)
		.map(([id, item]) => ({id, ...item})) as Array<Epic & {id: Id}>
	return epics
}

export const sortEpics = <T extends Epic>(epics: T[]): T[] =>
	epics.sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => a.userValue - b.userValue)

export type FeatureWithId = Feature & {id: Id}

export const getFeatures = (storyMapItems: StoryMapState[`items`]): FeatureWithId[] => {
	const features = Object.entries(storyMapItems)
		.filter(([, item]) => item?.type === `feature`)
		.map(([id, item]) => ({id, ...item})) as Array<Feature & {id: Id}>
	return features
}

// Assumes all features are siblings
export const sortFeatures = <T extends Feature>(features: T[]): T[] =>
	features.sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => a.userValue - b.userValue)

export type StoryWithId = Story & {id: Id}

export const getStories = (storyMapItems: StoryMapState[`items`]): StoryWithId[] => {
	const stories = Object.entries(storyMapItems)
		.filter(([, item]) => item?.type === `story`)
		.map(([id, item]) => ({id, ...item})) as Array<Story & {id: Id}>
	return stories
}

// Assumes all stories are siblings
export const sortStories = (stories: StoryWithId[], allVersions: QuerySnapshot<Version>): StoryWithId[] =>
	stories
		.sort((a, b) => a.name.localeCompare(b.name))
		.sort((a, b) => {
			const aVersion = allVersions.docs.find((version) => version.id === a.versionId)
			const bVersion = allVersions.docs.find((version) => version.id === b.versionId)
			return aVersion?.exists() && bVersion?.exists() ? aVersion.data().name.localeCompare(bVersion.data().name) : 0
		})

export const getStoryMapShape = (
	storyMapItems: StoryMapState[`items`],
	allVersions: QuerySnapshot<Version>,
): Array<{id: Id; children: Array<{id: Id; children: Array<{id: Id}>}>}> => {
	const epics = sortEpics(getEpics(storyMapItems))
	const features = sortFeatures(getFeatures(storyMapItems))
	const stories = sortStories(getStories(storyMapItems), allVersions)

	const storyMapShape = epics.map((epic) => {
		const epicFeatures = features.filter((feature) => feature.parentId === epic.id)
		return {
			id: epic.id,
			children: epicFeatures.map((feature) => {
				const featureStories = stories.filter((story) => story.parentId === feature.id)
				return {
					id: feature.id,
					children: featureStories.map((story) => ({id: story.id})),
				}
			}),
		}
	})

	return storyMapShape
}
