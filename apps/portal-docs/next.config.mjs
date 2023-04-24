import nextra from "nextra";
const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
	staticImage: true,
	latex: true,
	flexsearch: {
		codeblock: false,
	},
});
export default withNextra();
