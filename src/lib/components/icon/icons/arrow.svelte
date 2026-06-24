<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	const { ...attrs }: SVGAttributes<SVGElement> = $props();
</script>

<svg
	width="14"
	height="14"
	{...attrs}
	viewBox="0 0 14 14"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g clip-path="url(#clip0_1016_56)">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M8.38223 1.10173C8.11769 0.837183 7.68877 0.837183 7.42422 1.10173C7.15967 1.36628 7.15967 1.7952 7.42422 2.05975L11.6871 6.32267H0.677419C0.303291 6.32267 0 6.62597 0 7.00009C0 7.37422 0.303291 7.67751 0.677419 7.67751H11.6871L7.42422 11.9404C7.15967 12.205 7.15967 12.6339 7.42422 12.8985C7.68877 13.163 8.11769 13.163 8.38223 12.8985L13.8016 7.4791C14.0661 7.21455 14.0661 6.78564 13.8016 6.52109L8.38223 1.10173Z"
			fill="black"
		/>
	</g>
	<defs>
		<clipPath id="clip0_1016_56">
			<rect width="14" height="14" fill="white" />
		</clipPath>
	</defs>
</svg>
