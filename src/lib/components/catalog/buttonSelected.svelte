<script lang="ts">
	import Button from '../button.svelte';
	let { selectedSize = $bindable() } = $props();
</script>

<div class="flex flex-wrap gap-3">
	<Button
		size="sm"
		variant="outline"
		class="border border-[#A3A3A3]  hover:cursor-pointer"
		onClick={() => (selectedSize = 'XS')}>XS</Button
	>
	<Button
		size="sm"
		variant="outline"
		class="border-[#A3A3A3 ] border  hover:cursor-pointer"
		onClick={() => (selectedSize = 'S')}>S</Button
	>
	<Button
		size="sm"
		variant="outline"
		class="border border-[#A3A3A3]  hover:cursor-pointer"
		onClick={() => (selectedSize = 'M')}>M</Button
	>
	<Button
		size="sm"
		variant="outline"
		class="border border-[#A3A3A3]  hover:cursor-pointer"
		onClick={() => (selectedSize = 'L')}>L</Button
	>
	<Button
		size="sm"
		variant="outline"
		class="border border-[#A3A3A3]  hover:cursor-pointer"
		onClick={() => (selectedSize = 'XL')}>XL</Button
	>
	<Button
		size="sm"
		variant="outline"
		class="border border-[#A3A3A3] hover:cursor-pointer"
		onClick={() => (selectedSize = 'XXL')}>XXL</Button
	>

	<p class="mt-2 text-sm text-gray-600">
		Selected size: <span class="text-green-300">{selectedSize || ''}</span>
	</p>
</div>
