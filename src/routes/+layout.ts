import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
	return {
		siteName: url.hostname,
		pageName: url.pathname.replace(/^\//, '')
	};
};
