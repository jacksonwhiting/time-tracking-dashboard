import {
	component$,
	createContextId,
	useContextProvider,
	useStore,
} from "@builder.io/qwik"
import ProfileCard from "./Profile-card"
import TimeCard, { type timeDataItem } from "./Time-card"
// import type { timeDataItems } from "../pages/index.astro"

export interface timeInterval {
	daily: boolean
	weekly: boolean
	monthly: boolean
}

export const TimeContext = createContextId<timeInterval>("timeInterval")

export default component$((props: { timeData: [] }) => {
	const timeIntervalState = useStore({
		daily: false,
		weekly: true,
		monthly: false,
	})
	useContextProvider(TimeContext, timeIntervalState)

	return (
		<>
			<main class="">
				<div class="my-16 mx-6"></div>
				<ProfileCard />
				{props.timeData.map((item: timeDataItem) => {
					return <Time-card title={item.title} />
				})}
			</main>
		</>
	)
})
