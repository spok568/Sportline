<script lang="ts">
	import type { Snippet } from 'svelte';
	
	type Variant = 'primary' | 'outline';
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
		size = 'lg',
		onClick,
		iconFirst = '',
		iconLast='',
		class: customClass = '',
		children
	}: Props = $props();

	const variantClasses = {
		primary: 'bg-blue-600 hover:bg-blue-700 text-white',
		outline: 'border border-gray-300 hover:bg-gray-100'
	};

	const sizeClasses = {
		sm: 'px-3 py-2 text-sm',
		md: 'px-4 py-3',
		lg: 'px-6 py-4 text-lg'
	};
	
	const buttonClass = [
    customClass,              
    'rounded-lg',
    'w-fit',
    variantClasses[variant],
    sizeClasses[size]
];
</script>

<button class={buttonClass} onclick={onClick}>
	{label}
	{#if iconFirst}
	<div class="fflex justify-center items-center ">
		<img src={iconFirst} alt=""  class="h-4 w-4 " />
		</div>
	{/if}
	{@render children?.()}
	{#if iconLast}
		<img src={iconLast} alt="картинка" class="h-4 w-4" />
	{/if}
</button>