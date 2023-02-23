"use client"

import {Tabs} from "antd"
import {doc} from "firebase/firestore"
import {useDocument} from "react-firebase-hooks/firestore"

import type {FC} from "react"

import EpicsTab from "./epicsTab/EpicsTab"
import FeaturesTab from "./featuresTab/FeaturesTab"
import {ProductConverter} from "~/types/db/Products"
import {db} from "~/utils/firebase"
import {useActiveProductId} from "~/utils/useActiveProductId"

export const metadata = {
	title: `Priorities | SprintZero`,
}

const PrioritiesPage: FC = () => {
	const activeProductId = useActiveProductId()
	const [activeProduct] = useDocument(doc(db, `Products`, activeProductId).withConverter(ProductConverter))

	if (!activeProduct?.exists()) return null
	return (
		<div className="h-full">
			<Tabs
				tabPosition="right"
				items={[
					{key: `epics`, label: `Epics`, children: <EpicsTab activeProduct={activeProduct} />},
					{key: `features`, label: `Features`, children: <FeaturesTab activeProduct={activeProduct} />},
				]}
				style={{height: `100%`}}
			/>
		</div>
	)
}

export default PrioritiesPage
