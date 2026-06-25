<script lang="ts">
	import type { Component } from 'svelte';
	import type { SVGAttributes } from 'svelte/elements';
	let {
		title = '',
		isOpen = false,
		onClick,
		children,
		class: className = '',
		iconLast,
		iconFirst
	}: {
		title?: string;
		isOpen?: boolean;
		onClick?: () => void;
		children?: import('svelte').Snippet;
		class?: string;
		iconLast?: Component<SVGAttributes<SVGElement>>;
		iconFirst?: Component<SVGAttributes<SVGElement>>;
	} = $props();

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div class={className}>
	<button onclick={onClick || toggle} class="flex w-full  items-center justify-between py-2">
		<div class="flex items-center gap-2">
			{#if iconFirst }
			<div  class=" {isOpen ? 'rotate-270' : 'rotate-0'}">
<svelte:component this={iconFirst} />
			</div>
				
			{/if}
			<span class="uppercase font-medium leading-10 text-sm tracking-[2px] ">{title}</span>
		</div>

		{#if iconLast}
			<div class=" {isOpen ? 'rotate-270' : 'rotate-0'}">
				<svelte:component this={iconLast} />
			</div>
		{/if}
	</button>
	{#if isOpen}
		<div>
			{@render children?.()}
		</div>
	{/if}
</div>
