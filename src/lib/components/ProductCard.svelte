<script>
 let { name, price, imageUrl } = $props();
</script>

<div class="border rounded-lg p-8 w-64">
  <img src={imageUrl} alt={name} class="w-full h-52  rounded" />
  <h3 class="font-bold mt-2">{name}</h3>
  <p class="text-lg ">{price} ₽</p>
</div>