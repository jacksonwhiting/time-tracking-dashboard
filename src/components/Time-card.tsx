import { component$, useContext } from "@builder.io/qwik"
import { TimeContext } from "./Root"

export interface timeDataItem {
	title?: string
	timeframes?: {
		daily: {
			current: number
			previous: number
		}
		weekly: {
			current: number
			previous: number
		}
		monthly: {
			current: number
			previous: number
		}
	}
}

export default component$((props: timeDataItem) => {
	const timeInterval = useContext(TimeContext)
	const cardVisuals = [
		{
			Work: {
				icon: "bg-[url('../../src/images/icon-work.svg')]",
				bgColor: "bg-skin-work-pri",
			},
		},
		{
			Play: {
				icon: "bg-[url(../../src/images/icon-play.svg)]",
				bgColor: "bg-skin-play-pri",
			},
		},
		{
			Study: {
				icon: "bg-[url(../../src/images/icon-study.svg)]",
				bgColor: "bg-skin-study-pri",
			},
		},
		{
			Exercise: {
				icon: "bg-[url(../../src/images/icon-exercise.svg)]",
				bgColor: "bg-skin-exercise-pri",
			},
		},
		{
			Social: {
				icon: "bg-[url(../../src/images/icon-social.svg)]",
				bgColor: "bg-skin-social-pri",
			},
		},
		{
			"Self Care": {
				icon: "bg-[url(../../src/images/icon-self-care.svg)]",
				bgColor: "bg-skin-selfcare-pri",
			},
		},
	]

	return (
		<div
			class={[
				" mt-8 lg:mt-0 bg-no-repeat bg-[right_1rem_top_-.5rem] pt-10 rounded-2xl max-w-[375px] lg:min-w-[255px] mx-auto",
				cardVisuals.map((item) => {
					if (Object.keys(item).toString() === props.title) {
						return [
							item[`${props.title}`].bgColor,
							item[`${props.title}`].icon,
						]
					}
				}),
			]}>
			<div class="bg-skin-fill-pri rounded-2xl py-6 lg:pb-8 px-8">
				<div class="flex items-center justify-between">
					<span class="text-bodyM">{props.title}</span>
					<svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
							fill="#BBC0FF"
							fill-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="pt-2 lg:pt-4 flex lg:flex-col items-center lg:items-start justify-between">
					{timeInterval.daily && (
						<span class="text-hdgM lg:text-hdgXl">
							{props.timeframes.daily.current} hrs
						</span>
					)}
					{timeInterval.weekly && (
						<span class="text-hdgM lg:text-hdgXl">
							{props.timeframes.weekly.current} hrs
						</span>
					)}
					{timeInterval.monthly && (
						<span class="text-hdgM lg:text-hdgXl">
							{props.timeframes.monthly.current} hrs
						</span>
					)}
					{timeInterval.daily && (
						<span class="text-skin-text-tert">
							Last Week - {props.timeframes?.daily.previous} hrs
						</span>
					)}
					{timeInterval.weekly && (
						<span class="text-skin-text-tert">
							Last Week - {props.timeframes?.weekly.previous} hrs
						</span>
					)}
					{timeInterval.monthly && (
						<span class="text-skin-text-tert">
							Last Week - {props.timeframes?.monthly.previous} hrs
						</span>
					)}
				</div>
			</div>
		</div>
	)
})
