import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = ({ url }) => {
  return {
    siteName: 'snuen.dev', // Static value for prerendering
    pageName: url.pathname.replace(/^\//, '')
  };
};
