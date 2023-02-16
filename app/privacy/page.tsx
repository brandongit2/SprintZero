"use client"

import {Input} from "antd"
import Image from "next/image"

import type {FC} from "react"

import {privacyStatement} from "~/components/privacy"

const PrivacyPage: FC = () => {
	return (
		<div className="h-full w-full overflow-x-hidden">
			<div className="mx-auto flex h-full max-w-5xl flex-col gap-8 p-8">
				<div className="flex justify-between">
					<Image src="/images/logo_beta_light.png" alt="SprintZero logo" width={178} height={42} priority />
				</div>
				<div className="flex flex-col gap-8">
					<h1 className="text-3xl">Privacy Policy</h1>
					<Input.TextArea
						size="large"
						readOnly
						rows={20}
						value={privacyStatement}
						className="!resize-none bg-[#eceef1] font-mono text-sm text-black"
					/>
				</div>
			</div>
		</div>
	)
}

export default PrivacyPage