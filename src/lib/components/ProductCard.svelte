<script lang="ts">
import type {Props} from '$lib/api/type'

  
  let { name, price, imageUrl, label, onClick }: Props = $props();
</script>

<div class="w-64 rounded-lg border p-8">
  <img src={imageUrl} alt={name} class="h-52 w-full rounded" />
  <h3 class="mt-2 font-bold text-center">{name}</h3>
  <p class="text-lg text-center">{price}</p>
  
  {#if label && onClick}
    <button 
      onclick={onClick}
      class="w-full rounded-2xl border text-center hover:bg-gray-100 cursor-pointer"
    >
      {label}
    </button>
  {/if}
</div>