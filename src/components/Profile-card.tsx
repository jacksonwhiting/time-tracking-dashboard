import { component$ } from "@builder.io/qwik"

export default component$(() => {
	return (
		<div class="bg-skin-fill-pri rounded-2xl max-w-[450px] lg:max-w-fit mx-auto">
			<div class="bg-skin-fill-sec rounded-2xl py-6 px-8 lg:py-10 lg:max-w-[255px]">
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
					role="button"
					class="text-skin-text-sec text-bodyM focus:text-skin-text-pri ">
					Daily
				</button>
				<button
					role="button"
					class="text-skin-text-sec text-bodyM focus-within:text-skin-text-pri">
					Weekly
				</button>
				<button
					role="button"
					class="text-skin-text-sec text-bodyM focus-within:text-skin-text-pri">
					Monthly
				</button>
			</div>
		</div>
	)
})
