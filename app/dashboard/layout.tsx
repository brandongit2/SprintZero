"use client"

import {CloseOutlined} from "@ant-design/icons"
import {useQuery} from "@tanstack/react-query"
import {Avatar, Drawer, Layout, Menu} from "antd5"
import Image from "next/image"
import {useState} from "react"

import type {ReactNode, FC} from "react"

import SettingsMenu from "~/app/dashboard/SettingsMenu"
import SideMenu from "~/app/dashboard/SideMenu"
import useMainStore from "~/stores/mainStore"
import {getAllProducts} from "~/utils/fetch"

export type DashboardLayoutProps = {
	children: ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({children}) => {
	const user = useMainStore((state) => state.user)
	const {data: products} = useQuery({
		queryKey: [`all-products`, user?.uid],
		// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
		queryFn: getAllProducts(user?.uid!),
		enabled: user?.uid !== undefined,
	})

	const setActiveProduct = useMainStore((state) => state.setActiveProduct)
	const activeProduct = useMainStore((state) => state.activeProduct)

	const [isSettingsOpen, setIsSettingsOpen] = useState(false)

	return (
		<Layout className="h-full">
			<Layout.Header style={{paddingInline: `unset`}}>
				<div className="flex h-full items-center gap-8 bg-pine px-[17.45px]">
					<Image src="/images/logo_beta.png" alt="SprintZero logo" width={178} height={42} priority />

					<Menu
						theme="dark"
						mode="horizontal"
						selectedKeys={activeProduct ? [activeProduct] : []}
						items={products?.map((product) => ({
							key: product.id,
							label: (
								<button type="button" onClick={() => void setActiveProduct(product.id)} className="relative capitalize">
									{product.name}
									{activeProduct === product.id && <div className="absolute left-0 bottom-0 h-1 w-full bg-green" />}
								</button>
							),
						}))}
						className="grow bg-transparent"
					/>

					<button type="button" onClick={() => void setIsSettingsOpen(true)}>
						<Avatar src={user?.photoURL} className="border-2 border-green" />
					</button>
				</div>
			</Layout.Header>
			<Layout className="bg-[#f0f2f5]" style={{flexDirection: `row`}}>
				<Layout.Sider theme="light">
					<SideMenu />
				</Layout.Sider>
				<Layout.Content>{children}</Layout.Content>
			</Layout>

			<Drawer
				title="Settings"
				closable={false}
				width="192px"
				open={isSettingsOpen}
				onClose={() => void setIsSettingsOpen(false)}
				extra={
					<button type="button" onClick={() => void setIsSettingsOpen(false)}>
						<CloseOutlined />
					</button>
				}
				bodyStyle={{padding: `12px`}}
			>
				<SettingsMenu />
			</Drawer>
		</Layout>
	)
}

export default DashboardLayout
