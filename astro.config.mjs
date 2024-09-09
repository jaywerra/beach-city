import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://beachcitygolfclub.com/',
	integrations: [
		mdx(),
		sitemap(),
		partytown({
			config: {
				debug: true,
				// You don't need to forward here because you are doing it in the global script.
			},
		}),
	],
});