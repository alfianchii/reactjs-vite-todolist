const setItemWithExp = (key: string, value: unknown) => {
	const today = new Date();
	today.setHours(0, 0, 0, 0); // Set time to 00:00:00:000
	const expiration = today.getTime() + 24 * 60 * 60 * 1000; // Add 24 hours
	const item = { value, expiration };
	localStorage.setItem(key, JSON.stringify(item));
};

const getItemWithExp = (key: string): [] => {
	const item = JSON.parse(localStorage.getItem(key) || "[]");
	const currentTime = new Date().getTime();
	if (item && currentTime < item.expiration) return item.value;
	localStorage.removeItem(key);
	return [];
};

export { setItemWithExp, getItemWithExp };
