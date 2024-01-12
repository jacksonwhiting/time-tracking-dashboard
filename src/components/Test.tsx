import { component$ } from "@builder.io/qwik"

import type { timeDataItem } from "./Time-card"

export const Test = component$((props: { timeDatas: timeDataItem[] }) => {
	return (
		<>
			{props.timeDatas.map((item) => {
				console.log(item)
				return <div key={item.title}>{item.title}</div>
			})}
			<div>Some other text</div>
		</>
	)
})
