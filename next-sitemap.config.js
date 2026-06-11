/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://kenrax.in",
	generateRobotsTxt: false,
	outDir: "public",
	changefreq: "daily",
	priority: 0.7,
	exclude: [],
	robotsTxtOptions: {
		policies: [
			{ userAgent: "*", allow: "/" },
		],
	},
	transform: async (config, path) => {
		const priority = path === "/" ? 1.0
			: path.startsWith("/product") ? 0.8
			: path.startsWith("/products") ? 0.9
			: path.startsWith("/blogs") ? 0.6
			: 0.5;

		return {
			loc: path,
			changefreq: "daily",
			priority,
			lastmod: new Date().toISOString(),
		};
	},
}