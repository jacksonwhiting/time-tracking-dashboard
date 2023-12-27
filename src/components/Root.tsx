import { component$ } from "@builder.io/qwik"
import ProfileCard from "./Profile-card"
import TimeCard from "./Time-card"

export default component$(() => {
	return (
		<>
			<main class="">
				<div class="my-16 mx-6"></div>
				<ProfileCard />
				<TimeCard class="mt-8" />
			</main>
		</>
	)
})
