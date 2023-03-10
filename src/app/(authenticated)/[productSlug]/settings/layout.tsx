"use client"

import {Layout} from "antd"
import {collection} from "firebase/firestore"
import {useRouter} from "next/navigation"
import {useEffect, useState} from "react"
import {useCollection} from "react-firebase-hooks/firestore"

import type {FC, ReactNode} from "react"

import SideMenu from "./SideMenu"
import {useAppContext} from "../AppContext"
import {MemberConverter} from "~/types/db/Products/Members"
import {conditionalThrow} from "~/utils/conditionalThrow"

export type SettingsLayoutProps = {
	children: ReactNode
}

const SettingsLayout: FC<SettingsLayoutProps> = ({children}) => {
	const {product, user} = useAppContext()
	const router = useRouter()

	const [members, , membersError] = useCollection(collection(product.ref, `Members`).withConverter(MemberConverter))
	conditionalThrow(membersError)

	const [isOwner, setIsOwner] = useState(false)

	useEffect(() => {
		if (members?.docs.find((member) => member.id === user.id)?.data().type === `owner`) {
			setIsOwner(true)
		} else {
			router.replace(`/404`)
		}
	}, [members?.docs, router, user.id])

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
