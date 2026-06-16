<script lang="ts">
import Button from "../Button.svelte";
    let { selectedSize = $bindable() } = $props();

</script>

<div class="flex flex-wrap gap-3">
    <Button size="md" variant="outline" onClick={() => selectedSize = 'XS'} class={selectedSize === 'XS' ? 'bg-blue-500 text-white' : ''}>XS</Button>
    <Button size="md" variant="outline" onClick={() => selectedSize = 'S'} class={selectedSize === 'S' ? 'bg-blue-500 text-white' : ''}>S</Button>
    <Button size="md" variant="outline" onClick={() => selectedSize = 'M'} class={selectedSize === 'M' ? 'bg-blue-500 text-white' : ''}>M</Button>
    <Button size="md" variant="outline" onClick={() => selectedSize = 'L'} class={selectedSize === 'L' ? 'bg-blue-500 text-white' : ''}>L</Button>
    <Button size="md" variant="outline" onClick={() => selectedSize = 'XL'} class={selectedSize === 'XL' ? 'bg-blue-500 text-white' : ''}>XL</Button>
    <Button size="md" variant="outline" onClick={() => selectedSize = 'XXL'} class={selectedSize === 'XXL' ? 'bg-blue-500 text-white' : ''}>XXL</Button>
</div>