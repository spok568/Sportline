<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	const { ...attrs }: SVGAttributes<SVGElement> = $props();
</script>

<svg
	width="7"
	height="1"
	viewBox="0 0 7 1"
	{...attrs}
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M5.6416 0.5L0.500075 0.5" stroke="#1E1E1E" stroke-linecap="round" />
</svg>
