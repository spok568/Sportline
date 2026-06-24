<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'outline' | 'noBorder';
	type Size = 'sm' | 'md' | 'lg';

	interface Props {
		label?: string;
		variant?: Variant;
		onClick?: (event: MouseEvent) => void;
		size?: Size;
		iconFirst?: string;
		iconLast?: string;
		class?: string;
		children?: Snippet;
	}

	let {
		label = '',
		variant = 'primary',
		size,
		onClick,
		iconFirst = '',
		iconLast = '',
		class: customClass = '',
		children
	}: Props = $props();

	const variantClasses = {
		primary: 'bg-blue-600 hover:bg-blue-700 text-white',
		outline: 'border border-gray-300 hover:bg-gray-100',
		noBorder: ''
	};

	const sizeClasses = {
		sm: 'px-3 py-2 text-sm',
		md: 'px-4 py-3',
		lg: 'px-6 py-4 text-lg'
	};

	const buttonClass = [customClass, variantClasses[variant], sizeClasses[size]];
</script>

<button class={buttonClass} onclick={onClick}>
	{label}
	{#if iconFirst}
		<div class="flex items-center justify-center">
			<img src={iconFirst} alt="" />
		</div>
	{/if}
	{@render children?.()}
	{#if iconLast}
		<div class="flex items-center justify-center">
			<img src={iconLast} alt="картинка" />
		</div>
	{/if}
</button>
