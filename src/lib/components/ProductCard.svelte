<script lang="ts">
	import Button from "./Button.svelte";

  let { 
    name, 
    price, 
    imageUrl,
    Url, 
    label, 
    span,
    quantity,
    onClick,
    onDelete 
  }:{
    name?: string;
    price?: number;
    imageUrl?: string;
    Url?:string
    label?: string;
    span?:string; 
    quantity?:number;
    onClick?: (event: MouseEvent) => void;
    onDelete?: (event: MouseEvent) => void;
  } = $props();
</script>




<div class="w-68 rounded-lg border p-6 relative">

  {#if onDelete}
    <button 
      onclick={onDelete}
      class="absolute top-2 right-2 w-6 h-6 rounded-full bg-black text-white hover:bg-gray-800 flex items-center justify-center"
    >
      ✕
    </button>
  {/if}
  


  <img src={imageUrl} alt={name} class="h-52 w-full rounded" />
  
  <div class="flex items-center justify-between py-2">
    <h3 class="mt-2 font-bold text-center">{name}</h3>
    <p class="text-lg text-center">{price} ₽</p>
    
  </div>
  
<div class="">
{#if quantity}
<div class="flex items-center justify-center gap-3 py-2 border-t border-gray-100">
  <Button 
  size='sm'
  variant='outline'
  onClick={onClick}
  iconFirst={Url}
  label='+'
  />
      <span>{quantity}</span>
   <Button 
  size='sm'
  variant='outline'
  onClick={onClick}
 label="-"
  />
    </div>
  {/if}
  </div>
{#if span  }
<div class="flex gap-1 h-4 text left-1 bg-white px-2  text-sm rounded">
  <p>размер:</p>{span}
  </div>
{/if}
  {#if label && onClick}
    <button 
      onclick={onClick} 
      class="w-full rounded-2xl border text-center hover:bg-gray-100 cursor-pointer mt-2 py-2"
    >
      {label}
    </button>
  {/if}
</div>
