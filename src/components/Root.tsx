import {
	component$,
	createContextId,
	useContextProvider,
	useStore,
} from "@builder.io/qwik"
import ProfileCard from "./Profile-card"
import TimeCard from "./Time-card"

export interface timeInterval {
	daily: boolean
	weekly: boolean
	monthly: boolean
}

export const TimeContext = createContextId<timeInterval>("timeInterval")

export default component$(() => {
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
				<TimeCard class="bg-[url('../../src/images/icon-work.svg')]" />
			</main>
		</>
	)
})
