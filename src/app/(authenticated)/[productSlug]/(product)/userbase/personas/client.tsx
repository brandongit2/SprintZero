"use client"

import {Breadcrumb, Card, Tabs} from "antd"
import {collection, doc, writeBatch} from "firebase/firestore"
import {useEffect, useRef, useState} from "react"
import {useErrorHandler} from "react-error-boundary"
import {useCollection} from "react-firebase-hooks/firestore"

import type {FC} from "react"

import DayInTheLife from "./DayInTheLife"
import EditableListCard from "./EditableListCard"
import {useAppContext} from "~/app/(authenticated)/[productSlug]/AppContext"
import {PersonaConverter} from "~/types/db/Products/Personas"
import {ChangeConverter} from "~/types/db/Products/Personas/Changes"
import {DayInTheLifeConverter} from "~/types/db/Products/Personas/DaysInTheLife"
import {FrustrationConverter} from "~/types/db/Products/Personas/Frustrations"
import {GoalConverter} from "~/types/db/Products/Personas/Goals"
import {InteractionConverter} from "~/types/db/Products/Personas/Interactions"
import {PersonaTaskConverter} from "~/types/db/Products/Personas/PersonaTasks"
import {PriorityConverter} from "~/types/db/Products/Personas/Priorities"
import {ResponsibilityConverter} from "~/types/db/Products/Personas/Responsibilities"
import {db} from "~/utils/firebase"

const PersonasClientPage: FC = () => {
	const {product} = useAppContext()
	const [activeTab, setActiveTab] = useState(``)
	const [isEditingCard, setIsEditingCard] = useState<
		| `goals`
		| `interactions`
		| `tasks`
		| `responsibilities`
		| `priorities`
		| `frustrations`
		| `changes`
		| `description`
		| `dayInTheLife`
		| undefined
	>(undefined)

	const [personas, , personasError] = useCollection(collection(product.ref, `Personas`).withConverter(PersonaConverter))
	useErrorHandler(personasError)
	const [goals, , goalsError] = useCollection(
		personas && activeTab !== ``
			? collection(personas.docs.find((persona) => persona.id === activeTab)!.ref, `Goals`).withConverter(GoalConverter)
			: undefined,
	)
	useErrorHandler(goalsError)
	const [interactions, , interactionsError] = useCollection(
		personas && activeTab !== ``
			? collection(personas.docs.find((persona) => persona.id === activeTab)!.ref, `Interactions`).withConverter(
					InteractionConverter,
			  )
			: undefined,
	)
	useErrorHandler(interactionsError)
	const [personaTasks, , personaTasksError] = useCollection(
		personas && activeTab !== ``
			? collection(personas.docs.find((persona) => persona.id === activeTab)!.ref, `PersonaTasks`).withConverter(
					PersonaTaskConverter,
			  )
			: undefined,
	)
	useErrorHandler(personaTasksError)
	const [responsibilities, , responsibilitiesError] = useCollection(
		personas && activeTab !== ``
			? collection(personas.docs.find((persona) => persona.id === activeTab)!.ref, `Responsibilities`).withConverter(
					ResponsibilityConverter,
			  )
			: undefined,
	)
	useErrorHandler(responsibilitiesError)
	const [priorities, , prioritiesError] = useCollection(
		personas && activeTab !== ``
			? collection(personas.docs.find((persona) => persona.id === activeTab)!.ref, `Priorities`).withConverter(
					PriorityConverter,
			  )
			: undefined,
	)
	useErrorHandler(prioritiesError)
	const [frustrations, , frustrationsError] = useCollection(
		personas && activeTab !== ``
			? collection(personas.docs.find((persona) => persona.id === activeTab)!.ref, `Frustrations`).withConverter(
					FrustrationConverter,
			  )
			: undefined,
	)
	useErrorHandler(frustrationsError)
	const [changes, , changesError] = useCollection(
		personas && activeTab !== ``
			? collection(personas.docs.find((persona) => persona.id === activeTab)!.ref, `Changes`).withConverter(
					ChangeConverter,
			  )
			: undefined,
	)
	useErrorHandler(changesError)
	const [daysInTheLife, , daysInTheLifeError] = useCollection(
		personas && activeTab !== ``
			? collection(personas.docs.find((persona) => persona.id === activeTab)!.ref, `DaysInTheLife`).withConverter(
					DayInTheLifeConverter,
			  )
			: undefined,
	)
	useErrorHandler(daysInTheLifeError)

	const hasSetDefaultPersona = useRef(false)
	useEffect(() => {
		if (personas?.docs[0] && !hasSetDefaultPersona.current) {
			setActiveTab(personas.docs[0].id)
			hasSetDefaultPersona.current = true
		}
	}, [personas])

	return (
		<Tabs
			tabPosition="right"
			activeKey={activeTab}
			onChange={(key) => setActiveTab(key)}
			className="h-full"
			items={personas?.docs.map((persona) => ({
				key: persona.id,
				label: <span className="inline-block min-w-0 max-w-[4rem] truncate">{persona.data().name}</span>,
				children: (
					<div className="flex h-full flex-col overflow-auto">
						<div className="sticky top-0 z-10 bg-bgLayout px-12 pt-8 pb-6">
							<Breadcrumb items={[{title: `Userbase`}, {title: `Personas`}]} />
						</div>

						<div className="grid grid-cols-2 gap-4 px-12 pb-8">
							<div className="flex flex-col gap-4">
								{goals && (
									<EditableListCard
										isEditing={isEditingCard === `goals`}
										onEditStart={() => setIsEditingCard(`goals`)}
										title="Goals"
										list={goals.docs.map((goal) => ({id: goal.id, text: goal.data().text}))}
										onEditEnd={() => setIsEditingCard(undefined)}
										onCommit={async (list) => {
											const batch = writeBatch(db)
											list.forEach((item) => {
												if (goals.docs.find((goal) => goal.id === item.id)) {
													batch.update(doc(persona.ref, `Goals`, item.id).withConverter(GoalConverter), {
														text: item.text,
													})
												} else {
													batch.set(doc(persona.ref, `Goals`, item.id).withConverter(GoalConverter), {
														text: item.text,
													})
												}
											})
											await batch.commit()
											setIsEditingCard(undefined)
										}}
									/>
								)}
								{interactions && (
									<EditableListCard
										isEditing={isEditingCard === `interactions`}
										onEditStart={() => setIsEditingCard(`interactions`)}
										title="Interactions"
										list={interactions.docs.map((interaction) => ({id: interaction.id, text: interaction.data().text}))}
										onEditEnd={() => setIsEditingCard(undefined)}
										onCommit={async (list) => {
											const batch = writeBatch(db)
											list.forEach((item) => {
												if (interactions.docs.find((interaction) => interaction.id === item.id)) {
													batch.update(doc(persona.ref, `Interactions`, item.id).withConverter(InteractionConverter), {
														text: item.text,
													})
												} else {
													batch.set(doc(persona.ref, `Interactions`, item.id).withConverter(InteractionConverter), {
														text: item.text,
													})
												}
											})
											await batch.commit()
											setIsEditingCard(undefined)
										}}
									/>
								)}
								{personaTasks && (
									<EditableListCard
										isEditing={isEditingCard === `tasks`}
										onEditStart={() => setIsEditingCard(`tasks`)}
										title="Tasks"
										list={personaTasks.docs.map((item) => ({id: item.id, text: item.data().text}))}
										onEditEnd={() => setIsEditingCard(undefined)}
										onCommit={async (list) => {
											const batch = writeBatch(db)
											list.forEach((item) => {
												if (personaTasks.docs.find((personaTask) => personaTask.id === item.id)) {
													batch.update(doc(persona.ref, `PersonaTasks`, item.id).withConverter(PersonaTaskConverter), {
														text: item.text,
													})
												} else {
													batch.set(doc(persona.ref, `PersonaTasks`, item.id).withConverter(PersonaTaskConverter), {
														text: item.text,
													})
												}
											})
											await batch.commit()
											setIsEditingCard(undefined)
										}}
									/>
								)}
								{responsibilities && (
									<EditableListCard
										isEditing={isEditingCard === `responsibilities`}
										onEditStart={() => setIsEditingCard(`responsibilities`)}
										title="Responsibilities"
										list={responsibilities.docs.map((item) => ({id: item.id, text: item.data().text}))}
										onEditEnd={() => setIsEditingCard(undefined)}
										onCommit={async (list) => {
											const batch = writeBatch(db)
											list.forEach((item) => {
												if (responsibilities.docs.find((responsibility) => responsibility.id === item.id)) {
													batch.update(
														doc(persona.ref, `Responsibilities`, item.id).withConverter(ResponsibilityConverter),
														{
															text: item.text,
														},
													)
												} else {
													batch.set(
														doc(persona.ref, `Responsibilities`, item.id).withConverter(ResponsibilityConverter),
														{
															text: item.text,
														},
													)
												}
											})
											await batch.commit()
											setIsEditingCard(undefined)
										}}
									/>
								)}
								{priorities && (
									<EditableListCard
										isEditing={isEditingCard === `priorities`}
										onEditStart={() => setIsEditingCard(`priorities`)}
										title="Priorities"
										list={priorities.docs.map((item) => ({id: item.id, text: item.data().text}))}
										onEditEnd={() => setIsEditingCard(undefined)}
										onCommit={async (list) => {
											const batch = writeBatch(db)
											list.forEach((item) => {
												if (priorities.docs.find((priority) => priority.id === item.id)) {
													batch.update(doc(persona.ref, `Priorities`, item.id).withConverter(PriorityConverter), {
														text: item.text,
													})
												} else {
													batch.set(doc(persona.ref, `Priorities`, item.id).withConverter(PriorityConverter), {
														text: item.text,
													})
												}
											})
											await batch.commit()
											setIsEditingCard(undefined)
										}}
									/>
								)}
								{frustrations && (
									<EditableListCard
										isEditing={isEditingCard === `frustrations`}
										onEditStart={() => setIsEditingCard(`frustrations`)}
										title="Frustrations"
										list={frustrations.docs.map((item) => ({id: item.id, text: item.data().text}))}
										onEditEnd={() => setIsEditingCard(undefined)}
										onCommit={async (list) => {
											const batch = writeBatch(db)
											list.forEach((item) => {
												if (frustrations.docs.find((frustration) => frustration.id === item.id)) {
													batch.update(doc(persona.ref, `Frustrations`, item.id).withConverter(FrustrationConverter), {
														text: item.text,
													})
												} else {
													batch.set(doc(persona.ref, `Frustrations`, item.id).withConverter(FrustrationConverter), {
														text: item.text,
													})
												}
											})
											await batch.commit()
											setIsEditingCard(undefined)
										}}
									/>
								)}
								{changes && (
									<EditableListCard
										isEditing={isEditingCard === `changes`}
										onEditStart={() => setIsEditingCard(`changes`)}
										title="Changes"
										list={changes.docs.map((item) => ({id: item.id, text: item.data().text}))}
										onEditEnd={() => setIsEditingCard(undefined)}
										onCommit={async (list) => {
											const batch = writeBatch(db)
											list.forEach((item) => {
												if (changes.docs.find((change) => change.id === item.id)) {
													batch.update(doc(persona.ref, `Changes`, item.id).withConverter(ChangeConverter), {
														text: item.text,
													})
												} else {
													batch.set(doc(persona.ref, `Changes`, item.id).withConverter(ChangeConverter), {
														text: item.text,
													})
												}
											})
											await batch.commit()
											setIsEditingCard(undefined)
										}}
									/>
								)}
							</div>
							<div className="flex flex-col gap-4">
								<Card title="Description">
									<p>{persona.data().description}</p>
								</Card>
								{daysInTheLife && (
									<DayInTheLife
										isEditing={isEditingCard === `dayInTheLife`}
										onEditStart={() => setIsEditingCard(`dayInTheLife`)}
										title="A Day in the Life"
										list={daysInTheLife.docs.map((item) => ({id: item.id, text: item.data().text}))}
										onEditEnd={() => setIsEditingCard(undefined)}
										onCommit={async (list) => {
											const batch = writeBatch(db)
											list.forEach((item) => {
												if (daysInTheLife.docs.find((dayInTheLife) => dayInTheLife.id === item.id)) {
													batch.update(
														doc(persona.ref, `DaysInTheLife`, item.id).withConverter(DayInTheLifeConverter),
														{
															text: item.text,
														},
													)
												} else {
													batch.set(doc(persona.ref, `DaysInTheLife`, item.id).withConverter(DayInTheLifeConverter), {
														text: item.text,
													})
												}
											})
											await batch.commit()
											setIsEditingCard(undefined)
										}}
									/>
								)}
							</div>
						</div>
					</div>
				),
			}))}
		/>
	)
}

export default PersonasClientPage
