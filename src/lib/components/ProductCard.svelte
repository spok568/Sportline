<script lang="ts">
	import Button from "./Button.svelte";
  import  type { PropsForButton } from "$lib/api/type";



  let { 
    name, 
    price, 
    imageUrl,
    Url, 
    cost,
    iconLast,
    label, 
    span,
    quantity,
    onClick,
    onDelete 
  }:PropsForButton = $props();
</script>




<div class="w-[304px] rounded-lg  p-6  h-[412px]">

 
  

<div class="h-[412px] w-[304px] " >
  <img src={imageUrl} alt={name} class="w-[304px] h-[313px] border border-[#D7D7D7]"  />
  
  <div class="flex items-center justify-between py-2 w-[304px] h-[40px]">
    <h3 class="mt-2 font-bold text-center">{name}</h3>
    <p class="text-lg text-center">{price} {cost} </p>
    </div>
    <div class="">
    <div>
     {#if onDelete && quantity}
  <div class="flex justify-end">
    <button 
      onclick={onDelete}
      class=" w-6 h-6    flex items-center justify-end"
    >
      ✕
    </button>
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
    </div>
  {/if}
  </div>

  </div>
{#if span  }
<div class="flex gap-1 h-4 text left-1 bg-white px-2  text-sm rounded">
  <p>размер:</p>{span}
  </div>
{/if}
  {#if label && onClick}
  
    <button 
      onclick={onClick} 
      class="w-[304px] h-[39px]  bg-gray-200 text-center hover:bg-gray-300 cursor-pointer mt-2 py-2"
    >
    <div class="flex justify-center items-center gap-2">
      {label}
      <div class=" h-4 w-4 flex justify-center items-center">
  <img src={iconLast}  alt="" > 
  </div>
  </div>
    </button>
    


    
  {/if}
</div>

  </div>
  
