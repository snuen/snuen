import { UAParser } from 'ua-parser-js';

export const getIsMobile = (): boolean => {
	const parser = new UAParser();
	const result = parser.getResult();

	return typeof result.device.type !== 'undefined';
};
