import { component$ } from "@builder.io/qwik"
import ProfileCard from "./Profile-card"

export default component$(() => {
	return (
		<>
			<main class="">
				<div class="my-16 mx-6"></div>
				<ProfileCard />
			</main>
		</>
	)
})
