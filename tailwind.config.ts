import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	plugins: [
		// require("@tailwindcss/typography"),
		require("daisyui"),
		require("@tailwindcss/forms"),
	],
};
export default config;
