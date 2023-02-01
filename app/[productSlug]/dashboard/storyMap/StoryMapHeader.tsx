import {LeftOutlined, RightOutlined} from "@ant-design/icons"
import {useQuery} from "@tanstack/react-query"
import {Breadcrumb, Button} from "antd"
import {useAtomValue, useSetAtom} from "jotai"
import {useCollectionData} from "react-firebase-hooks/firestore"

import type {FC} from "react"

import {currentVersionAtom, newVersionInputAtom} from "./atoms"
import {getAllVersions} from "~/utils/api/queries"

const StoryMapHeader: FC = () => {
	const currentVersion = useAtomValue(currentVersionAtom)
	const setNewVersionInput = useSetAtom(newVersionInputAtom)

	const [versions] = useCollectionData()

	return (
		<div className="flex flex-col gap-8">
			<div className="flex justify-between px-12 pt-8">
				<Breadcrumb>
					<Breadcrumb.Item>Story Map</Breadcrumb.Item>
					<Breadcrumb.Item>{versions?.find((version) => version.id === currentVersion.id)?.name}</Breadcrumb.Item>
				</Breadcrumb>

				<Button onClick={() => void setNewVersionInput(``)} className="bg-white">
					+ Add version
				</Button>
			</div>
			<div className="px-12 text-laurel">
				<div className="relative text-[0.6rem]">
					<LeftOutlined className="absolute left-[-6px] -translate-y-1/2" />
					<div className="absolute top-1/2 h-0 w-full -translate-y-1/2 border-t-[1px] border-dashed border-laurel" />
					<RightOutlined className="absolute right-[-6px] -translate-y-1/2" />
				</div>
				<div className="mt-2 flex justify-between text-xs">
					<p>High value</p>
					<p>Low value</p>
				</div>
			</div>
		</div>
	)
}

export default StoryMapHeader
