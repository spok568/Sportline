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

<h1 class="text-2xl font-bold p-8 ">Корзина</h1>

<div class="px-8  flex flex-wrap gap-12">
<div class="flex justify-end h-full py-8">
{#if items.length === 0}
    <p class="px-8 text-gray-500">Корзина пуста</p>
{:else}
<div class="border  ">
    <div class="px-8 mt-4 text-lg font-semibold">
    {#each items as item (item.id)}
<div class="border-b">

  <span>{item.product.name}:</span>
            <span>{item.product.price}</span>
            
            <div>
                        <span>количество:{item.quantity}</span>
               
                <span> размер:{item.size} </span>
                </div>
 </div>
    {/each}
 
        Итого: {priceOfProduct} ₽
    </div>
    <div class="px-8  m-4">
        <Button 
            label="Перейти к оформлению"
            
            variant="outline"
            size="lg"
            class="w-full   hover:cursor-pointer"
            onClick={openModal}
            
        />
    </div>
    </div>
{/if}   
</div>
    {#each items as item (item.id)}
    
        <div class="relative">
        
            <ProductCard 
            cost='₽.'
                name={item.product.name}
                price={item.product.price}
                imageUrl={item.product.imageUrl}
                quantity={item.quantity}
                onDelete={() => deleteInBasket(item.id)}
                span={item.size}
            />
     

         
         
            
        </div>
        
    {/each}
</div>



<OrderModal bind:isOpenOrderModal={isOpenOrderModal} />