<script lang="ts">
	import Icon from "$lib/Icon.svelte";
	import Section from "$lib/Section.svelte";
	import Search from "$lib/Search.svelte";
	import Hideable from "$lib/Hideable.svelte";
	import { sections } from "$lib/sections";
	import { sample } from "lodash-es";

	const titles = ["foobar", "quxpom", "barbaz", "ducc"];

	const icons = [
		{ name: "whatsapp", color: "#25D366", link: "https://web.whatsapp.com" },
		{
			name: "telegram",
			color: "#2aabee",
			link: "https://web.telegram.org/k",
		},
		{ name: "mail", color: "#df9f9f", link: "https://mail.cock.li" },
		{ name: "bank", color: "#1680e9", link: "https://chase.com" },
	];
</script>

<svelte:head>
	<title>{sample(titles)}</title>
</svelte:head>

<div class="hero flex flex-col justify-center text-center">
	{#if navigator.onLine}
		{#await fetch("http://ifconfig.me/ip").then((r) => r.text()) then ip}
			<Hideable>
				<small class="fixed right-3 bottom-2 italic">
					{ip}
				</small>
			</Hideable>
		{/await}
	{/if}

	<div class="mb-6 flex flex-wrap gap-8">
		{#each icons as { name, link }}
			<a
				class="oscilla rounded-lg outline-none ring-gray-300 focus:ring-2"
				href={link}
			>
				<Icon {name} />
			</a>
		{/each}
	</div>

	<Search />

	<div class="section-grid">
		{#each sections as section}
			<Section {...section} />
		{/each}
	</div>
</div>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 2rem 1rem;
		gap: 0.2rem;
	}

	.section-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		padding: 2rem;
	}
</style>
