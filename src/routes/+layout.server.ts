import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
  return {
    siteName: url.hostname,
    pageName: url.pathname.replace(/^\//, '')
  };
};
