/** @type {import('next').NextConfig} */

// https://nextjs.org/docs/messages/invalid-next-config
// https://nextjs.org/docs/pages/api-reference/next-config-js
const nextConfig = {
	/* config options here */
	reactStrictMode: true, // Applies React Strict mode throughout the tool - https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
	async redirects() {
		return [
			{
				source: "/",
				destination: "/2023",
				permanent: true,
			},
			{
				source: "/login",
				destination: "/2023",
				permanent: true,
			},
			{
				source: "/info",
				destination: "/2023",
				permanent: true,
			},
		];
	},
	// https://dev.to/mridul2820/comment/201gd
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
			config.resolve.fallback.tls = false;
			config.resolve.fallback.net = false;
			// eslint-disable-next-line
			config.resolve.fallback.child_process = false;
		}

		return config;
	},
};

module.exports = nextConfig;
