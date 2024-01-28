export const getIsMobile = (): boolean => {
	const userAgent = navigator.userAgent;

	// Check for iOS devices
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		return true;
	}

	// Check for Android devices
	if (/android/i.test(userAgent)) {
		return true;
	}

	// Check for Windows devices
	if (/windows phone/i.test(userAgent)) {
		return true;
	}

	// If none of the above, it's probably not a mobile device
	return false;
};
