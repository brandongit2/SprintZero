/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react"
import Head from "next/head"
import {useRouter} from "next/router"

import AppLayout from "../components/Dashboard/AppLayout"

import {splitRoutes} from "../utils"
import {db} from "../config/firebase-config"
import {activeProductState} from "../atoms/productAtom"
import {useRecoilValue} from "recoil"

import {Row, Col, Typography, Button, Card, Tag, Timeline} from "antd5"
import Stages from "../components/Vision/Stages"

import {formatDistance} from "date-fns"

const {Title, Text} = Typography

const CustomDot = () => (
	<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="5" cy="5" r="4" fill="white" stroke="#54A31C" stroke-width="2" />
	</svg>
)

export default function Visions() {
	const {pathname} = useRouter()
	const activeProduct = useRecoilValue(activeProductState)
	const [editMode, setEditMode] = useState(false)
	const [vision, setVision] = useState(null)
	const [events, setEvents] = useState(null)

	const fetchVisions = () => {
		db.collection("Visions")
			.where("product_id", "==", "J3e9gnYupcQDMxP9qeRt")
			.onSnapshot((snapshot) => {
				if (snapshot.empty === true) {
					setEditMode(true)
				} else {
					setVision(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))[0])
				}
			})
	}

	useEffect(() => {
		fetchVisions()
	}, [])

	const fetchVisionEvents = () => {
		if (vision) {
			db.collection("VisionEvents")
				.where("vision_id", "==", "Ms89C843j6HBAV4PCZ6o")
				.orderBy("createdAt", "desc")
				.onSnapshot((snapshot) => {
					setEvents(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
					console.log(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
				})
		}
	}

	useEffect(() => {
		fetchVisionEvents()
	}, [vision])

	const getLastUpdate = (date) => {
		if (date) return formatDistance(new Date(date), new Date(), {includeSeconds: true}) + " ago"
	}

	return (
		<div className="mb-8">
			<Head>
				<title>Vision | Sprint Zero</title>
				<meta name="description" content="Sprint Zero strategy objectives" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AppLayout
				// mainClass="mr-[160px]"
				breadCrumbItems={splitRoutes(pathname)}
				onMainAdd={() => setAddMode(true)}
				sideAdd={false}
				hideSideBar={true}
			>
				<Row gutter={42}>
					<Col span={18}>
						<div className="mb-5 flex items-start justify-between">
							<Title>Product Vision</Title>

							<Button className="bg-white hover:text-black " disabled={editMode} onClick={() => setEditMode(true)}>
								Edit
							</Button>
						</div>

						<div>
							{!editMode ? (
								<Card
									className="border border-[#D9D9D9] p-[42px]"
									style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08), 1px -4px 4px rgba(0, 0, 0, 0.06)"}}
								>
									{vision && (
										<div
											className="text-2xl"
											style={{whiteSpace: "pre-line"}}
											dangerouslySetInnerHTML={{__html: vision.acceptedVision}}
										></div>
									)}
								</Card>
							) : vision ? (
								<Stages vision={vision} setEditMode={setEditMode} />
							) : (
								<Stages setEditMode={setEditMode} />
							)}
						</div>
					</Col>

					<Col span={6}>
						<Tag className="mb-[18px]" color="#EEFCD9">
							<Text className="text-xs text-[#646464]">Changelog</Text>
						</Tag>

						<Timeline>
							{events &&
								events.map((event, i) => (
									<Timeline.Item color="#54A31C" key={i}>
										<p className="mb-[10px] font-courier text-xs">{getLastUpdate(event.createdAt)}</p>
										{i === 0 ? (
											<p className="text-xs">
												<span className="text-[#1890FF]">@{event.user.name}</span> created Product Vision <strong>"{event.newValue}"</strong>
											</p>
										) : (
											<p className="text-xs">
												<span className="text-[#1890FF]">@{event.user.name}</span> modified{" "}
												<strong>“{event.prevValue}”</strong> to <strong>“{event.newValue}”</strong>
											</p>
										)}
									</Timeline.Item>
								))}
						</Timeline>
					</Col>
				</Row>
			</AppLayout>
		</div>
	)
}
