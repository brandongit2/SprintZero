import {Layout} from "antd5"

import type {ReactElement, ReactNode} from "react"

type Props = {
	children: ReactNode
}

const DashboardLayout = ({children}: Props): ReactElement | null => {
	return <Layout>{children}</Layout>
}

export default DashboardLayout
