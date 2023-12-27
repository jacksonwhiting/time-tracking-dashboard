import { component$, type ClassList } from "@builder.io/qwik"

export default component$((props: { class?: ClassList }) => {
	return (
		<div
			style="background-image: url('../../src/images/icon-work.svg')"
			class={[
				props.class,
				"bg-skin-work-pri bg-no-repeat bg-[right_1rem_top_-.75rem] pt-10 rounded-2xl max-w-[375px] lg:max-w-[255px] mx-auto",
			]}>
			<div class="bg-skin-fill-pri rounded-2xl pt-6 pb-4 px-8 lg:py-10">
				<div class="flex items-center justify-between">
					<span class="text-bodyM">Work</span>
					<svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
							fill="#BBC0FF"
							fill-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="pt-2 lg:pt-4 flex lg:flex-col items-center lg:items-start justify-between">
					<span class="text-hdgM lg:text-hdgXl">32hrs</span>
					<span class="text-skin-text-tert">Last Week - 36hrs</span>
				</div>
			</div>
		</div>
	)
})
