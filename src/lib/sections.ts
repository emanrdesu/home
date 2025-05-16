import type { Section } from "./types.ts";

export const sections: Section[] = [
	{
		name: "chan",
		color: "#00cc7a",
		links: [
			{ href: "https://4chan.org/a", text: "/a/" },
			{ href: "https://4chan.org/c", text: "/c/" },
			{ href: "https://4chan.org/g", text: "/g/" },
			{ href: "https://4chan.org/wg", text: "/wg/" },
			{ href: "https://4chan.org/r9k", text: "/r9k/" },
			{ href: "https://4chan.org/pol", text: "/pol/" },
			{ href: "https://4chan.org/fit", text: "/fit/" },
			{ href: "https://4chan.org/wsg", text: "/wsg/" },
			{ href: "https://4chan.org/tv", text: "/tv/" },
			{ href: "https://4chan.org/t", text: "/t/" },
			{ href: "https://lainchan.org/%CE%BB/index.html", text: "/λ/" },
		],
	},

	{
		name: "personal",
		color: "#93c5fd",
		links: [
			{
				href: "https://app.dataannotation.tech/users/sign_in",
				text: "work",
			},
			{
				href: "https://app.outlier.ai/playground",
				text: "outlier",
			},
			{ href: "https://www.paypal.com", text: "paypal" },
		],
	},

	{
		name: "ai",
		color: "#a5a4db",
		links: [
			{ href: "https://grok.com", text: "grok" },
			{ href: "https://gemini.google.com", text: "gemini" },
			{ href: "https://chat.openai.com", text: "chatgpt" },
			{ href: "https://chat.deepseek.com", text: "deepseek" },
		],
	},

	{
		name: "anon",
		color: "#f0a8d0",
		links: [
			{ href: "http://google.com", text: "google" },
			{ href: "http://cia.gov", text: "cia" },
			{ href: "https://www.fbi.gov/", text: "fbi" },
		],
	},

	{
		name: "0x40",
		color: "#85c742",
		links: [
			{ href: "https://hues.kepstin.ca", text: "hues" },
			{ href: "https://spook.mon.im/", text: "spook" },
			{ href: "https://0x40.mon.im/", text: "mon" },
			{ href: "https://420.mon.im/snoop.html", text: "420" },
		],
	},
];
