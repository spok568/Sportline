<script lang="ts">
import { onMount } from "svelte";
import ProductCard from "$lib/components/ProductCard.svelte";
import Button from "$lib/components/Button.svelte";
type CartItem = {
      id: string;
    size: string;
    quantity: number;
    product: {
        name: string;
        price: number;
        imageUrl: string;
    };
};
let items:CartItem[] = $state([]);

onMount(async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3000/api/cart', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    items = data.items || [];
});

async function deleteInBasket(itemId: string) {
    const token = localStorage.getItem('token');
    await fetch(`http://localhost:3000/api/cart/items/${itemId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    items = items.filter(item => item.id !== itemId);
}
</script>

<h1 class="text-2xl font-bold p-8">Корзина</h1>


<div class="px-8 flex flex-wrap gap-6">
    {#each items as item (item.id)}
        <div class="relative w-64">
            <ProductCard 
                name={item.product.name}
                price={item.product.price}
                imageUrl={item.product.imageUrl}
            />
            <div class="absolute bottom-2 left-2 bg-white px-2 py-1  text-sm ">
                Размер: {item.size}
            </div>
            <button 
                onclick={() => deleteInBasket(item.id)}
                class="absolute top-2 right-2 w-6 h-6 rounded-full  text-black hover:bg-gray-100 cursor-pointer flex items-center justify-center"
            >
                ✕
            </button>
        </div>
    {/each}
</div>

{#if items.length === 0}
    <p class="px-8 text-gray-500">Корзина пуста</p>
{:else}
    <div class="px-8 mt-8">
        <Button 
            label="Перейти к оформлению"
            variant="outline"
            size="lg"
            class="w-full max-w-md"
        />
    </div>
{/if}