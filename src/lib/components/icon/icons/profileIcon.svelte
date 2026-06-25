<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	const { ...attrs }: SVGAttributes<SVGElement> = $props();
</script>

<svg
	width="14"
	height="14"
	viewBox="0 0 14 14"
	{...attrs}
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="6.74998" cy="4.17857" r="3.42857" stroke="white" stroke-width="1.5" />
	<path
		d="M12.75 13.607C12.75 11.7135 10.0637 10.1785 6.75 10.1785C3.43629 10.1785 0.75 11.7135 0.75 13.607"
		stroke="white"
		stroke-width="1.5"
	/>
</svg>
