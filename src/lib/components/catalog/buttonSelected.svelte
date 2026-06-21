<script lang="ts">
import Button from "../Button.svelte";
    let { selectedSize = $bindable() } = $props();

</script>

<div class="flex flex-wrap gap-3">
    <Button size='sm' variant="outline" onClick={() => selectedSize = 'XS'} >XS</Button>
    <Button size='sm' variant="outline" onClick={() => selectedSize = 'S'} >S</Button>
    <Button size='sm' variant="outline" onClick={() => selectedSize = 'M'}>M</Button>
    <Button size='sm' variant="outline" onClick={() => selectedSize = 'L'} >L</Button>
    <Button size='sm' variant="outline" onClick={() => selectedSize = 'XL'} >XL</Button>
    <Button size='sm' variant="outline" onClick={() => selectedSize = 'XXL'} >XXL</Button>
</div>  