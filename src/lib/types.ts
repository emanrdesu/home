export type Link = {
	href: string;
	text: string;
};

export type Section = {
	name: string;
	color: string;
	links: Link[];
};

interface Array<T> {
	/**
	 * @returns {t} a random element from the array.
	 */
	choice: () => T;
}

(Array.prototype as any).choice = function <T>(): T {
	return this[Math.floor(Math.random() * this.length)];
};
