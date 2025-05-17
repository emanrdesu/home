type Link = {
	href: string;
	text: string;
};

type Section = {
	name: string;
	color: string;
	links: Link[];
};

export const sections: Section[] = [
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
];
