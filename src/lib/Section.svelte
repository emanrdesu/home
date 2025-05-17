<script>
	import Icon from "$lib/Icon.svelte";

	let { name, color, links } = $props();
	let hover = $state(false);
	let active = $state(false);
</script>

<div
	role="button"
	tabindex={hover ? -1 : 0}
	onmouseenter={() => (hover = true)}
	onmouseleave={() => (hover = false)}
	onkeydown={(e) => {
		if (e.key === " ") {
			active = !active;
		}

		if (e.key === "Enter") {
			if (e.target == e.currentTarget) {
				active = !active;
			}
		}
	}}
	class="card p-2 opacity-70 ring-[{color}] shadow outline-none hover:opacity-100 focus:ring-2"
	style:color
	class:active
	class:opacity-90={active}
>
	<div class="icon">
		<Icon {name} />
	</div>

	<nav class="flex flex-col justify-center gap-[0.25em] outline-inherit">
		{#each links as { href, text }}
			{@const klass =
				"text-(--fg) hover:text-inherit focus:text-inherit opacity-70 focus:opacity-100"}
			<a
				tabindex={hover || active ? 0 : -1}
				{href}
				class="outline-none {klass} oscilla">{text}</a
			>
		{/each}
	</nav>
</div>

<style>
	.card {
		background-color: #36384a;
		width: 100%;
		min-width: 17ch;
		min-height: 17ch;
		text-align: center;

		padding-block: 1.5em;
		border-radius: 5px;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.card nav {
		width: 100%;
		height: 100%;
		font-weight: bold;
		opacity: 0;
		transition: opacity 200ms cubic-bezier(0.6, 0.4, 0, 1);
	}

	.card:hover nav,
	.card.active nav {
		opacity: 1;
	}

	.card .icon {
		position: absolute;
		transition: opacity 200ms cubic-bezier(0.6, 0.4, 0, 1);
	}

	.card:hover .icon,
	.card.active .icon {
		opacity: 0;
	}
</style>
