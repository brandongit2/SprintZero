"use client"

import {Layout} from "antd"
import {doc} from "firebase/firestore"
import {useRouter} from "next/navigation"
import {useEffect, useState} from "react"
import {useDocument} from "react-firebase-hooks/firestore"

import type {FC, ReactNode} from "react"

import SideMenu from "./SideMenu"
import {ProductConverter} from "~/types/db/Products"
import {db} from "~/utils/firebase"
import {useActiveProductId} from "~/utils/useActiveProductId"
import {useUser} from "~/utils/useUser"

export type SettingsLayoutProps = {
	children: ReactNode
}

const SettingsLayout: FC<SettingsLayoutProps> = ({children}) => {
	const user = useUser()
	const activeProductId = useActiveProductId()
	const [activeProduct] = useDocument(doc(db, `Products`, activeProductId).withConverter(ProductConverter))
	const router = useRouter()

	const [isOwner, setIsOwner] = useState(false)

	useEffect(() => {
		if (!activeProduct?.exists() || !user) return
		if (Object.entries(activeProduct.data().members).find(([userId]) => userId === user.id)?.[1]?.type === `owner`) {
			setIsOwner(true)
		} else {
			router.replace(`/404`)
		}
	}, [activeProduct, router, user])

	if (!isOwner) return null
	return (
		<>
			<Layout.Sider theme="light">
				<SideMenu />
			</Layout.Sider>
			<Layout.Content className="relative">{children}</Layout.Content>
		</>
	)
}

export default SettingsLayout
