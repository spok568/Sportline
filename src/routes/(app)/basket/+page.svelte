<script lang="ts">
import { onMount } from "svelte";
import ProductCard from "$lib/components/ProductCard.svelte";
import Button from "$lib/components/Button.svelte";
import OrderModal from "$lib/components/basket/OrderModal.svelte";
import type { CartItem } from "$lib/api/type";
	import { CLIENT } from "$lib/api/CLIENT";


let items: CartItem[] = $state([]);
let isOpenOrderModal: boolean = $state(false);


async function addQuantity(id:string){
   
 const token = localStorage.getItem('token')
 const item = items.find(i => i.id ===  id)
 if(!item) return
        const newQuantity = item.quantity + 1

    await CLIENT.PATCH(`/api/cart/items/${itemId}`, {
			headers: {
				'Authorization': `Bearer ${token}`
			},
			body: {
				quantity: newQuantity
			}
		});

}
onMount(async () => {
    const token = localStorage.getItem('token');
   const response = await CLIENT.GET('/api/cart',{
        headers:{
             'Authorization': `Bearer ${token}`
        }
    
    })
     items = response.data?.items || [];

 });

async function deleteInBasket(itemId: string) {
    const token = localStorage.getItem('token');
    const response = await CLIENT.DELETE(`/api/cart/items/${itemId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
       items = items.filter(item => item.id != itemId)
}


const openModal = () => {
    isOpenOrderModal = true;
};
let priceOfProduct = $derived(  items.reduce((sum, item) => {
    return sum + (item.product.price * item.quantity);
}, 0))


</script>
<div class="border-b px-[50px] mb-[20px] py-4">
	<h1 class="text-2xl font-bold">Корзина</h1>
</div>
<div class="px-[50px] pb-[100px] flex justify-center gap-[60px] max-w-[1600px] mx-auto">

	<div class="flex-1 w-full">
		<div class="flex flex-wrap gap-x-[30px] gap-y-[50px]">
{#if items.length === 0}
				<p class="text-gray-500">Корзина пуста</p>
{:else}
    {#each items as item (item.id)}
					<div class="w-[280px] shrink-0">
						<ProductCard 
							name={item.product.name}
							price={item.product.price}
							cost="Р."
							imageUrl={item.product.imageUrl}
							quantity={item.quantity}
							span={item.size}
							onDelete={() => deleteInBasket(item.id)}
							onClick={() => addQuantity(item.id)}
						/>
					</div>
				{/each}
			{/if}
                </div>
 </div>

	<div class="w-[340px] shrink-0">
		{#if items.length > 0}
			<div class="border border-gray-300 p-6 bg-white">
				<p class="text-lg font-bold mb-6">К оформлению</p>
				
				<div class="flex flex-col gap-[10px]">
					{#each items as item (item.id)}
						<div class="flex justify-between items-center">
							<span class="font-bold text-sm">{item.product.name}</span>
							<span class=" text-sm">{item.product.price} Р.</span>
						</div>
    {/each}
				</div>
 
				<div class="flex justify-between items-center pt-4 border-t border-gray-300">
					<span class="text-lg font-bold">Итого:</span>
					<span class="text-lg ">{priceOfProduct} Р.</span>
    </div>
				
        <Button 
					label="Продолжить"
            variant="outline"
					size='sm'
					class="w-full mt-6 bg-[#D9D9D9] "
            onClick={openModal}
        />
    </div>
{/if}   
</div>
</div>

<OrderModal bind:isOpenOrderModal={isOpenOrderModal} />