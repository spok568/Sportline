<script lang="ts">
  let 
  { name, 
  price, 
  imageUrl, 
  label, 
  onClick,
   onDelete 
  }:{
    name?:string;
    price?:number;
    imageUrl?:string;
    label?:string;
     onClick?: (event: MouseEvent) => void;
    onDelete?:  (event: MouseEvent) => void;
  }
    = $props();
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
  
  <img src={imageUrl} alt={name} class="h-52 w-full rounded  " />
  <div class="flex items-center justify-between py-2">
  <h3 class="mt-2 font-bold text-center">{name}</h3>
  <p class="text-lg text-center">{price} ₽</p>
  
  </div>
  <div class="border rounded-3xl text-center gap-2 hover:cursor-pointer w-full hover:bg-gray-100 ">
    <button onclick={onClick}>добавить в корзину</button>
    </div>
  {#if label && onClick}
    <button onclick={onClick} class="w-full rounded-2xl border text-center hover:bg-gray-100 cursor-pointer mt-2">
      {label}
    </button>
  {/if}
</div>	