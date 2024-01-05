import { component$, useContext, useStore } from "@builder.io/qwik"
import { TimeContext } from "./Root"

export default component$(() => {
	const timeInterval = useContext(TimeContext)

	return (
		<div class="bg-skin-fill-pri rounded-2xl max-w-[375px] lg:max-w-[255px]  mx-auto">
			<div class="bg-skin-fill-sec rounded-2xl py-6 px-8 lg:py-10 ">
				<div class="flex gap-6 lg:gap-10 items-center lg:flex-col lg:items-start">
					<img
						src="/src/images/image-jeremy.png"
						decoding="async"
						alt="Jeremy Robson Avatar"
						class="w-[64px] min-h-[64px] lg:w-[78px] rounded-full border-2 border-skin-text-pri"
					/>
					<div>
						<p class="text-skin-text-tert">Report For</p>
						<p class="text-hdgS lg:text-hdgL">Jeremy Robson</p>
					</div>
				</div>
			</div>
			<div class="py-6 px-8 flex justify-between lg:flex-col lg:justify-normal lg:gap-4 lg:items-start">
				<button
					onClick$={() => {
						timeInterval.daily = !timeInterval.daily
						timeInterval.weekly = false
						timeInterval.monthly = false
					}}
					role="button"
					class={[
						timeInterval.daily
							? "text-skin-text-pri"
							: "text-skin-text-sec",
						"text-bodyM",
					]}>
					Daily
				</button>
				<button
					onClick$={() => {
						timeInterval.weekly = !timeInterval.weekly
						timeInterval.daily = false
						timeInterval.monthly = false
					}}
					role="button"
					class={[
						timeInterval.weekly
							? "text-skin-text-pri"
							: "text-skin-text-sec",
						"text-bodyM",
					]}>
					Weekly
				</button>
				<button
					onClick$={() => {
						timeInterval.monthly = !timeInterval.monthly
						timeInterval.daily = false
						timeInterval.weekly = false
					}}
					role="button"
					class={[
						timeInterval.monthly
							? "text-skin-text-pri"
							: "text-skin-text-sec",
						"text-bodyM",
					]}>
					Monthly
				</button>
			</div>
		</div>
	)
})
