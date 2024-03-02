export const debounce = (
	callback: (...args: unknown[]) => void,
	wait = 300
) => {
	let timeout: ReturnType<typeof setTimeout>;

	return (...args: unknown[]) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => callback(...args), wait);
	};
};
