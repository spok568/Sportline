<script>
	import Button from './button.svelte';

	let { items = [], value = $bindable(), placeholder = '', iconLast } = $props();
	let isOpen = $state(false);
</script>

<div>
	<Button variant="noBorder" label="asd" onClick={() => (isOpen = !isOpen)} />
	{#if isOpen}
		<select name="" id=""> </select>
	{/if}
</div>
