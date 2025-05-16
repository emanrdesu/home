<script>
	let hidden = $state(false);
	let { children } = $props();
</script>

<div
	on:click={() => (hidden = !hidden)}
	class="transition-opacity duration-200 cursor-pointer"
	style:opacity={hidden ? 0 : 1}
>
	{@render children()}
</div>
