import {useState} from "react"

import type {QueryDocumentSnapshot, QuerySnapshot} from "firebase/firestore"
import type {FC} from "react"
import type {Id} from "~/types"
import type {StoryMapState} from "~/types/db/StoryMapStates"
import type {Version} from "~/types/db/Versions"

import StoryContainer from "./StoryContainer"
import {useGenMeta} from "~/app/(authenticated)/[productSlug]/(product)/map/meta"
import StoryDrawer from "~/app/(authenticated)/[productSlug]/(product)/map/StoryDrawer"

export type StoryProps = {
	storyMapState: QueryDocumentSnapshot<StoryMapState>
	allVersions: QuerySnapshot<Version>
	storyId: Id
}

const Story: FC<StoryProps> = ({storyMapState, allVersions, storyId}) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const [isBeingDragged, setIsBeingDragged] = useState(false)

	const meta = useGenMeta({
		storyMapState,
		allVersions,
		currentVersionId: `__ALL_VERSIONS__`,
		editMode: false,
		itemsToBeDeleted: [],
		setItemsToBeDeleted: () => {},
	})

	return (
		<>
			<StoryContainer
				storyMapState={storyMapState}
				storyId={storyId}
				onDrawerOpen={() => setIsDrawerOpen(true)}
				isBeingDragged={isBeingDragged}
				onDragStart={() => setIsBeingDragged(true)}
				onDragEnd={() => setIsBeingDragged(false)}
			/>

			<StoryDrawer meta={meta} storyId={storyId} isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
		</>
	)
}

export default Story
