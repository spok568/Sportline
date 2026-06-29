<script lang="ts">
	import ProductCard from '$lib/components/card/productCard.svelte';
	import Button from '$lib/components/button.svelte';
	import OrderModal from '$lib/components/basket/orderModal.svelte';
	import type { CartItem } from '$lib/api/type';
	import { CLIENT } from '$lib/api/CLIENT';

	let { data } = $props();

	let items: CartItem[] = $state(data.items || []);
	let isOpenOrderModal: boolean = $state(false);

	const openModal = () => {
		isOpenOrderModal = true;
	};

	let priceOfProduct = $derived(
		items.reduce((sum, item) => {
			return sum + item.product.price * item.quantity;
		}, 0)
	);

	async function addQuantity(id: string) {
		const token = localStorage.getItem('token');
		const item = items.find((i) => i.id === id);
		if (!item) return;
		const newQuantity = item.quantity + 1;

		await CLIENT.PATCH('/api/cart/items/{id}', {
			headers: {
				Authorization: `Bearer ${token}`
			},
			params: {
				path: { id }
			},
			body: { quantity: newQuantity }
		});

		item.quantity = newQuantity;
	}

	async function deleteInBask(id: string) {
		const token = localStorage.getItem('token');
		if (!token) return;

		const item = items.find((i) => i.id === id);
		if (!item) return;

		if (item.quantity === 1) {
			await CLIENT.DELETE('/api/cart/items/{id}', {
				headers: {
					Authorization: `Bearer ${token}`
				},
				params: {
					path: { id }
				}
			});
			items = items.filter((i) => i.id !== id);
		} else {
			const newQuantity = item.quantity - 1;
			await CLIENT.PATCH('/api/cart/items/{id}', {
				headers: {
					Authorization: `Bearer ${token}`
				},
				params: {
					path: { id }
				},
				body: {
					quantity: newQuantity
				}
			});
			item.quantity = newQuantity;
		}
	}
</script>

<div class="mb-5 w-11/12 border-b px-12.5 py-4">
	<h1 class="text-2xl font-bold">Корзина</h1>
</div>
<div class="mx-auto flex max-w-[1600px] justify-center gap-15 px-12.5 pb-25">
	<div class="w-full flex-1">
		<div class="flex flex-wrap gap-x-7.5 gap-y-12.5">
			{#if items.length === 0}
				<p class="text-gray-500">Корзина пуста</p>
			{:else}
				{#each items as item (item.id)}
					<div class="w-70 shrink-0">
						<ProductCard
							name={item.product.name}
							price={item.product.price}
							cost="Р."
							imageUrl={item.product.imageUrl}
							quantity={item.quantity}
							span={item.size}
							onDelete={() => deleteInBask(item.id)}
							onClick={() => addQuantity(item.id)}
						/>
					</div>
				{/each}
			{/if}
		</div>
	</div>

	<div class="w-85 shrink-0">
		{#if items.length > 0}
			<div class="border border-[#D9D9D9] p-6">
				<p class="mb-6 text-lg font-bold">К оформлению</p>

				<div class="flex flex-col gap-2.5">
					{#each items as item (item.id)}
						<div class="flex items-center justify-between">
							<span class="text-sm font-bold">{item.product.name}</span>
							<span class=" text-sm">{item.product.price} Р.</span>
						</div>
					{/each}
				</div>

				<div class="flex items-center justify-between border-t border-gray-300 pt-4">
					<span class="text-lg font-bold">Итого:</span>
					<span class="text-lg">{priceOfProduct} Р.</span>
				</div>

				<Button
					label="Продолжить"
					variant="outline"
					size="sm"
					class="mt-6 w-full bg-[#D9D9D9] "
					onClick={openModal}
				/>
			</div>
		{/if}
	</div>
</div>

<OrderModal bind:isOpenOrderModal />
