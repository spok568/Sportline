<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/button.svelte';
	import Input from '$lib/components/input.svelte';
	import ProductCard from '$lib/components/card/productCard.svelte';
	import type { Product } from '$lib/api/type';
	import ButtonSelected from '$lib/components/catalog/buttonSelected.svelte';
	import { CLIENT } from '$lib/api/CLIENT';
	import { fade, fly } from 'svelte/transition';
	import { pictures } from '$lib/components/icon/icons';
	import type { Sizes } from '$lib/api/type';
	import SearchCatalog from '$lib/components/catalog/searchCatalog.svelte';
	import { resolve } from '$app/paths';
	import Accordion from '$lib/components/accordion.svelte';
	import AuthModal from '$lib/components/authModal/authModal.svelte';
	import { getUser } from '$lib/api/users';
	let isOpenModalAuth: boolean = $state(false);

	let isOpenModalWindow: boolean = $state(false);
	let selectedProduct: Product | null = $state(null);
	let selectedProductImage: string = $state('');
	let selectedProductPrice: string | number = $state('');
	let quantity: number = $state(1);
	let selectedProductId: string = $state('');
	let token = getUser();
	let selectedSize: Sizes = $state('M');
	let {
		data
	}: {
		data: {
			closes: Product[];
			shoes: Product[];
			sport: Product[];
		};
	} = $props();
	function closeModal() {
		isOpenModalWindow = false;
	}

	function autoModal() {
		if (!token) {
			isOpenModalAuth = true;
		} else {
			goto(resolve('/(app)/basket'));
		}
	}

	export async function getToBasket() {
		const token = localStorage.getItem('token');
		if (!selectedSize) {
			alert('такого размера нету');
			return;
		}
		if (!selectedProduct?.sizes?.includes(selectedSize)) {
			alert('Этот размер недоступен');
			return;
		}
		await CLIENT.POST('/api/cart/items', {
			headers: {
				Authorization: `Bearer ${token}`
			},
			body: {
				productId: selectedProductId,

				size: selectedSize,
				quantity: quantity
			}
		});

		closeModal();
		goto(resolve('/basket'));
	}
	let priceFrom: string = $state('0');
	let priceUpTo: string = $state('0');
</script>

<SearchCatalog />
<div class="flex gap-8 px-14 py-12">
	<div class="w-80">
		<p class="text-center text-2xl font-bold">Фильтр</p>

		<p class="mt-4 font-bold">Размеры</p>

		<div class="flex flex-wrap gap-1.5 border-b border-[#C9C9C9] py-2">
			<ButtonSelected />
		</div>

		<div class="py-2">
			<Accordion title="Категория" iconLast={pictures.Arrow} class="border-b border-[#C9C9C9] ">
				<div class="p-2" in:fly={{ y: -10, duration: 200 }} out:fade>
					<Input text="Одежда" inputType="checkbox" className="border-[#A2A2A2] " />
					<Input text="Обувь" inputType="checkbox" className="border-[#A2A2A2]" />
					<Input text="Спорт товары" inputType="checkbox" className="border-[#A2A2A2]" />
				</div>
			</Accordion>

			<Accordion title="Цвет" iconLast={pictures.Arrow} class="border-b border-[#C9C9C9]">
				<div class="p-2" in:fly={{ y: 10, duration: 200 }} out:fade>
					<Input text="Белый" inputType="checkbox" className="border-[#A2A2A2]" />
					<Input text="Черный" inputType="checkbox" className="border-[#A2A2A2]" />
					<Input text="Красный" inputType="checkbox" className="border-[#A2A2A2]" />
				</div>
			</Accordion>

			<Accordion title="Цeна" iconLast={pictures.Arrow} class="border-b border-[#C9C9C9]">
				<div class="p-2" in:fly={{ y: 10, duration: 200 }} out:fade>
					<div class="flex gap-4">
						<Input
							inputType="number"
							className="w-27 border rounded-lg  h-8"
							placeholder="цена от:"
							bind:value={priceFrom}
						/>

						<Input
							inputType="number"
							className="w-27 border rounded-lg  h-8"
							placeholder="цена до:"
							bind:value={priceUpTo}
						/>
					</div>

					<div class="py-4">
						{#if priceFrom > priceUpTo}
							<div><p class="text-red-500">цена от не может быть больше до</p></div>
						{/if}
						<p>цена от: {priceFrom} до {priceUpTo}</p>
					</div>
				</div>
			</Accordion>
		</div>
	</div>

	<div class="flex-1">
		<h2 class="mb-4 text-center text-2xl font-bold">Одежда</h2>
		<div class="mb-12 flex flex-wrap gap-6">
			{#each data.closes as clos (clos.id)}
				<ProductCard
					name={clos.name}
					price={clos.price}
					imageUrl={clos.imageUrl}
					iconLast={pictures.ShoppingCart}
					label="добавить в корзину"
					cost="₽."
					onClick={() => {
						selectedProductId = clos.id;
						selectedProduct = clos;
						selectedProductImage = clos.imageUrl;
						selectedProductPrice = clos.price;
						isOpenModalWindow = true;
					}}
				/>
			{/each}
		</div>

		<div>
			<p class="mb-4 text-center text-2xl font-bold">Ботинки</p>
			<div class="flex flex-wrap gap-6">
				{#each data.shoes as shoe (shoe.id)}
					<ProductCard
						name={shoe.name}
						price={shoe.price}
						imageUrl={shoe.imageUrl}
						iconLast={pictures.ShoppingCart}
						label="добавить в корзину"
						cost="₽."
						onClick={() => {
							selectedProductId = shoe.id;
							selectedProduct = shoe;

							selectedProductImage = shoe.imageUrl;
							selectedProductPrice = shoe.price;
							isOpenModalWindow = true;
						}}
					/>
				{/each}
			</div>
		</div>

		<div>
			<p class="mb-4 text-center text-2xl font-bold">Спорт товары</p>
			<div class="flex flex-wrap gap-6">
				{#each data.sport as sports (sports.id)}
					<ProductCard
						name={sports.name}
						cost="₽."
						price={sports.price}
						iconLast={pictures.ShoppingCart}
						imageUrl={sports.imageUrl}
						label="добавить в корзину"
						onClick={() => {
							selectedProductId = sports.id;
							selectedProduct = sports;
							selectedProductImage = sports.imageUrl;
							selectedProductPrice = sports.price;
							isOpenModalWindow = true;
						}}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>
{#if isOpenModalWindow}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
		<div class="relative flex h-127.75 w-220 items-center justify-center gap-2.5 bg-white">
			<img
				src={selectedProductImage}
				alt="Выбранный продукт"
				class="mr-15 h-107.75 w-[320px] border border-[#D9D9D9]"
			/>
			<div class="flex w-87.5 flex-col border border-[#D9D9D9] px-4 py-4">
				<div class="pt-5 pr-5 pb-2.5 pl-5">
					<h2 class="text-[16px] font-bold">{selectedProduct?.name}</h2>
					<p class="text-3xl">{selectedProductPrice} ₽</p>
				</div>
				<div class="  pr-1.25 pl-2.5">
					<p class="mb-3 text-lg text-gray-500">Размеры</p>
					<div class="flex flex-nowrap gap-0.5">
						<ButtonSelected bind:selectedSize />
					</div>
					<div class="pt-6">
						<Button
							iconLast={pictures.ShoppingCart}
							label="Добавить в корзину"
							variant="outline"
							onClick={() => {
								if (selectedSize) {
									if (token) {
										getToBasket();
									} else {
										autoModal();
									}
								}
							}}
							class="flex w-full justify-center gap-2 py-4 text-xl hover:cursor-pointer hover:bg-gray-100"
						/>
					</div>
				</div>
			</div>
			<Button
				variant="noBorder"
				size="sm"
				iconFirst={pictures.Cross}
				class="absolute top-10 right-12.5 flex h-10 w-10 items-center justify-center bg-white text-xl hover:cursor-pointer "
				onClick={closeModal}
			/>
			<AuthModal bind:isOpenModalAuth />
		</div>
	</div>
{/if}
