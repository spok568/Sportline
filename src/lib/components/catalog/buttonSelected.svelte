<script lang="ts">
	import Button from '../button.svelte';
	let { selectedSize = $bindable() } = $props();
</script>

<div class="flex flex-wrap gap-3">
	<Button
		size="sm"
		variant="outline"
		class="border border-[#A3A3A3]"
		onClick={() => (selectedSize = 'XS')}>XS</Button
	>
	<Button
		size="sm"
		variant="outline"
		class="border border-[#A3A3A3]"
		onClick={() => (selectedSize = 'S')}>S</Button
	>
	<Button
		size="sm"
		variant="outline"
		class="border border-[#A3A3A3]"
		onClick={() => (selectedSize = 'M')}>M</Button
	>
	<Button
		size="sm"
		variant="outline"
		class="border border-[#A3A3A3]"
		onClick={() => (selectedSize = 'L')}>L</Button
	>
	<Button
		size="sm"
		variant="outline"
		class="border border-[#A3A3A3]"
		onClick={() => (selectedSize = 'XL')}>XL</Button
	>
	<Button
		size="sm"
		variant="outline"
		class="border border-[#A3A3A3]"
		onClick={() => (selectedSize = 'XXL')}>XXL</Button
	>
</div>
<p class="mt-2 text-sm text-gray-600">Selected size: {selectedSize || ''}</p>
