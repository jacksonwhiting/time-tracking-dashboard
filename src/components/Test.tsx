import { component$ } from "@builder.io/qwik"

export default component$((props) => {
	return (
		<div>
			<div>{props.title}</div>
		</div>
	)
})
