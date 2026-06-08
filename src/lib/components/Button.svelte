<script lang="ts">
import type { Props } from "$lib/api/type";

	let {
		label = '',
		variant = 'primary',
		size = 'lg',
		onClick,
		icon = '',
		iconLast='',
		class: customClass = '',
         children,
	}: Props = $props();
  
	const variantClasses = {
		primary: 'bg-blue-600 hover:bg-blue-700 text-white',
		outline: ' border border-gray-300 hover:bg-gray-100 '
	};

	const sizeClasses = {
		sm: 'px-3 py-2 text-sm',
		md: 'px-4 py-3 ',
		lg: 'px-6 py-4 text-lg'
	};
	const buttonClass = ['rounded-lg', 'w-fit', variantClasses[variant], sizeClasses[size], customClass];
   
</script>

<button class={buttonClass} onclick={onClick}>
	{label}
	{#if icon}
		<img src={icon} alt="" />
	{/if}
     {@render children?.()}
	 {#if iconLast}
		
	<img src={iconLast} alt='картинка'> 
	 {/if}
</button>
