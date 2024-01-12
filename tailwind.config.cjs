module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				skin: {
					"canvas-pri": "#0E1323", //Dark blue main background
					"fill-pri": "#1C204B", //Dark blue on card
					"fill-sec": "#5747EA", //Lighter blue fille
					"work-pri": "#FF8B64", //Orange
					"play-pri": "#55C2E6", //Light blude
					"study-pri": "#FF5E7D", //Red
					"exercise-pri": "#4BCF82", //Green
					"social-pri": "#7335D2", //Purple
					"selfcare-pri": "#F1C75B", //Yellow
					"text-pri": "#FFFFFF", //White text
					"text-sec": "#7078C9",
					"text-tert": "#BBC0FF",
				},
			},
			fontFamily: {
				fontPri: ["Rubik Variable", "sans-serif"],
			},
			fontSize: {
				bodyS: ".9375rem", //15px
				bodyM: "1.125rem", //18px
				hdgS: "1.5rem", //24px
				hdgM: "2rem", //32px
				hdgL: "2.5rem", //40px
				hdgXl: "3.5rem", //56px
			},
		},
	},
	plugins: [],
}

15, 18, 24, 32, 40, 56
