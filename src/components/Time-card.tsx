import { component$, useContext } from "@builder.io/qwik"
import { TimeContext } from "./Root"
import { cardVisuals } from "../utilities"

export interface visuals {
	Work: {
		icon: string
		bgColor: string
	}
	Play: {
		icon: string
		bgColor: string
	}
	Study: {
		icon: string
		bgColor: string
	}
	Exercise: {
		icon: string
		bgColor: string
	}
	Social: {
		icon: string
		bgColor: string
	}
	"Self Care": {
		icon: string
		bgColor: string
	}
}
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

console.log(cardVisuals)

export default component$((props: timeDataItem) => {
	const timeInterval = useContext(TimeContext)
	const timeIntervalArr = Object.entries(timeInterval)

	return (
		<div
			class={[
				" mt-8 lg:mt-0 bg-no-repeat bg-[right_1rem_top_-.5rem] pt-10 rounded-2xl max-w-[375px] lg:min-w-[255px] mx-auto",
				cardVisuals.map((item) => {
					if (Object.keys(item).toString() === props.title) {
						return [
							item[`${props.title}` as keyof typeof item]?.bgColor ??
								"bg-slate-500",
							item[`${props.title}` as keyof typeof item]?.icon ??
								"bg-slate-500",
						]
					}
				}),
			]}>
			<div class="bg-skin-fill-pri rounded-2xl py-6 lg:pb-8 px-8">
				<div class="flex items-center justify-between">
					<span class="text-bodyM">{props.title}</span>
					<svg
						class="cursor-pointer"
						width="21"
						height="5"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
							fill="#BBC0FF"
							fill-rule="evenodd"
						/>
					</svg>
				</div>

				<div class="pt-2 lg:pt-4 flex lg:flex-col items-center lg:items-start justify-between">
					{timeIntervalArr.map(([key, value]) => {
						return (
							value && (
								<span key={key} class="text-hdgM lg:text-hdgXl">
									{
										props[
											"timeframes" as keyof typeof props.timeframes
										][`${key}`]["current"]
									}{" "}
									hrs
								</span>
							)
						)
					})}
					{timeIntervalArr.map(([key, value]) => {
						return (
							value && (
								<span class="text-skin-text-tert">
									Last Week -{" "}
									{
										props[
											"timeframes" as keyof typeof props.timeframes
										][`${key}`]["previous"]
									}{" "}
									hrs
								</span>
							)
						)
					})}
				</div>
			</div>
		</div>
	)
})
