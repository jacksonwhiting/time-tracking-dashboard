import {
	component$,
	createContextId,
	useContextProvider,
	useStore,
} from "@builder.io/qwik"
import ProfileCard from "./Profile-card"

import TimeCard from "./Time-card.tsx"
import type { timeDataItem } from "./Time-card"

export interface timeInterval {
	daily: boolean
	weekly: boolean
	monthly: boolean
}

export const TimeContext = createContextId<timeInterval>("timeInterval")

export default component$((props: { timeData: timeDataItem[] }) => {
	const timeIntervalState = useStore({
		daily: false,
		weekly: true,
		monthly: false,
	})
	useContextProvider(TimeContext, timeIntervalState)

	// console.log(props.timeData)

	return (
		<>
			<main class="">
				<div class="my-16 mx-6 lg:mx-auto lg:grid lg:grid-rows-2 lg:grid-cols-4 lg:gap-4 max-w-[1090px]">
					<ProfileCard />
					{props.timeData.map((item: timeDataItem) => {
						return (
							<TimeCard
								key={item.title}
								title={item.title}
								timeframes={item.timeframes}
							/>
						)
					})}
				</div>
			</main>
		</>
	)
})
