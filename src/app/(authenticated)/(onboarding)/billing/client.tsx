"use client"

import {useRouter, useSearchParams} from "next/navigation"

import type {FC} from "react"

const PricingClientPage: FC = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const session_id = searchParams?.get(`session_id`)

	if (session_id) {
		router.push(`/configuration`)
	}

	return (
		<div className="w-full">
			{/* @ts-ignore */}
			<stripe-pricing-table
				pricing-table-id="prctbl_1MsFVIIUry2flRTcmQWTzv9C"
				publishable-key="pk_test_51Ji035IUry2flRTc8XUkfCQqzwcBBHiMCDLPmhJNTpDovjA7LnKQTELrmqiw6gy9eaWs973iEEDMKmKxwdj9vt4s00lcvsFZ0i"
			/>
		</div>
	)
}

export default PricingClientPage
