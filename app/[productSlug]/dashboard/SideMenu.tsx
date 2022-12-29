"use client"

import {
	DeploymentUnitOutlined,
	HomeOutlined,
	NodeExpandOutlined,
	PullRequestOutlined,
	UserOutlined,
} from "@ant-design/icons"
import {Menu} from "antd5"
import Link from "next/link"
import {usePathname} from "next/navigation";
import {useRecoilValue} from "recoil"

import type {FC} from "react"
// import type {Product} from "~/types/db/Products"

import {activeProductState} from "../../../atoms/productAtom"

const SideMenu: FC = () => {
	const pathname = usePathname()
	const activeProduct: any = useRecoilValue(activeProductState)

	return (
		<>
			{activeProduct && (
				<Menu
					mode="inline"
					selectedKeys={[`sidemenu-${(pathname ?? ``).split(`/`).at(-1)}`]}
					items={[
						{key: `sidemenu-dashboard`, icon: <HomeOutlined />, label: <Link href={`/${activeProduct.slug}/dashboard`}>Home</Link>},
						{
							key: `sidemenu-strategy`,
							icon: <DeploymentUnitOutlined />,
							label: `Strategy`,
							children: [
								{key: `sidemenu-kickoff`, label: <Link href={`/${activeProduct.slug}/dashboard/strategy/kickoff`}>Kickoff</Link>},
								{
									key: `sidemenu-accessibility`,
									label: <Link href={`/${activeProduct.slug}/dashboard/strategy/accessibility`}>Accessibility</Link>,
								},
								{key: `sidemenu-objectives`, label: <Link href={`/${activeProduct.slug}/dashboard/strategy/objectives`}>Objectives</Link>},
								{key: `sidemenu-vision`, label: <Link href={`/${activeProduct.slug}/dashboard/strategy/vision`}>Vision</Link>},
							],
						},
						{
							key: `sidemenu-tactics`,
							icon: <PullRequestOutlined />,
							label: `Tactics`,
							children: [
								{key: `sidemenu-ethics`, label: <Link href={`/${activeProduct.slug}/dashboard/tactics/ethics`}>Ethics</Link>},
								{key: `sidemenu-priorities`, label: <Link href={`/${activeProduct.slug}/dashboard/tactics/priorities`}>Priorities</Link>},
								// {key: `sidemenu-release`, label: <Link href="/dashboard/tactics/release">Release</Link>},
								{
									key: `sidemenu-retrospective`,
									label: <Link href={`/${activeProduct.slug}/dashboard/tactics/retrospective`}>Retrospective</Link>,
								},
							],
						},
						{
							key: `sidemenu-operations`,
							icon: <NodeExpandOutlined />,
							label: `Operations`,
							children: [
								{key: `sidemenu-huddle`, label: <Link href={`/${activeProduct.slug}/dashboard/operations/huddle`}>Huddle</Link>},
								{key: `sidemenu-sprint`, label: <Link href={`/${activeProduct.slug}/dashboard/operations/sprint`}>Sprint</Link>},
								{key: `sidemenu-tasks`, label: <Link href={`/${activeProduct.slug}/dashboard/operations/tasks`}>Tasks</Link>},
							],
						},
						{
							key: `sidemenu-userbase`,
							icon: <UserOutlined />,
							label: `Userbase`,
							children: [
								{key: `sidemenu-dialogue`, label: <Link href={`/${activeProduct.slug}/dashboard/userbase/dialogue`}>Dialogue</Link>},
								{key: `sidemenu-journeys`, label: <Link href={`/${activeProduct.slug}/dashboard/userbase/journeys`}>Journeys</Link>},
								{key: `sidemenu-learnings`, label: <Link href={`/${activeProduct.slug}/dashboard/userbase/learnings`}>Learnings</Link>},
								{key: `sidemenu-personas`, label: <Link href={`/${activeProduct.slug}/dashboard/userbase/personas`}>Personas</Link>},
							],
						},
					]}
					style={{borderInlineEnd: `unset`}}
				/>
			)}
		</>
	)
}

export default SideMenu