/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true, // Applies React Strict mode throughout the tool - https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
	async redirects() {
		return [
			{
				source: "/",
				destination: "/info",
				permanent: true,
			},
			{
				source: "/login",
				destination: "/info",
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
			config.resolve.fallback.child_process = false;
		}

		return config;
	},
};
