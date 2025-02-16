<script>
	import Icon from '$lib/Icon.svelte';
	let value = '';

	function search() {
		const search = value.trim();
		if (search) {
			value = '';
			window.location.href = `https://duckduckgo.com?q=${encodeURIComponent(search)}`;
		}
	}
</script>

<div>
	<input
		onkeydown={(e) => {
			if (e.key == 'Enter') {
				search();
			}
		}}
		name="search"
		type="text"
		bind:value
		placeholder="search the web"
	/>
	<button
		onclick={search}
		class="-translate-x-[1px] px-1 ring-orange-200 outline-none focus:ring-2"
		tabindex={value.trim() ? 0 : -1}
	>
		<Icon name="search" />
	</button>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 35px;
		width: 100vw;
	}

	input {
		width: 100%;
		max-width: 444px;
		outline: none;
		font-size: 14px;
		font-weight: 500;
		background-color: #53535f;
		text-align: center;
		padding: 7px 10px;
		border: 3px solid transparent;
		border-top-left-radius: 7px;
		border-bottom-left-radius: 7px;
		margin-right: 1px;
		margin-left: 8px;
		transition: all 200ms ease;
	}

	input:hover {
		border: 3px solid rgba(255, 255, 255, 0.16);
	}

	input:focus {
		border: 3px solid #966ed3;
		background-color: var(--base-bg-200);
	}

	button {
		flex-grow: 0;
		height: 115%;
		width: 34px;
		border: none;
		cursor: pointer;
		background-color: rgba(54, 54, 56, 1);
		border-top-right-radius: 7px;
		border-bottom-right-radius: 7px;
		padding: 8px;
		display: flex;
		align-items: center;
		margin-right: 8px;
	}

	button:active,
	button:hover {
		background-color: rgb(99, 24, 105);
	}
</style>
