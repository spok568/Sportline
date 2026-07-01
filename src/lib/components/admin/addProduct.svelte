<script lang="ts">
	import Button from '../button.svelte';
	import Input from '../input.svelte';
	import { pictures } from '../icon/icons';
	let {
		isOpenModalAddProduct = $bindable()
	}: {
		isOpenModalAddProduct: boolean;
	} = $props();
</script>

{#if isOpenModalAddProduct}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
		<div class="relative h-88.5 w-100 bg-white p-6">
			<div class=" absolute top-3 right-3">
				<Button
					iconFirst={pictures.Cross}
					variant="noBorder"
					onClick={() => (isOpenModalAddProduct = false)}
				/>
			</div>

			<div class="   relative flex flex-col gap-3">
				<div class="flex items-center justify-around p-1">
					<span class="leading-10 font-black tracking-[2px] uppercase">Добавить товар</span>
				</div>
				<div class="grid grid-cols-2 gap-3">
					<div class="col-span-2">
						<Input
							placeholder="Наименование"
							className="w-full h-8.25  gap-2.5 border border-[#D9D9D9]"
						/>
					</div>
					<div class="">
						<Input placeholder="Цена" className="w-full h-8.25  gap-2.5  border border-[#D9D9D9]" />
					</div>
					<div class="">
						<Input
							placeholder="Категория"
							className="w-full  h-8.25   gap-2.5  border border-[#D9D9D9]"
							iconLast={pictures.ArrowDown}
						/>
					</div>
					<div class="col-span-2">
						<Input
							placeholder="Размеры"
							className="w-full h-8.25  gap-2.5  border border-[#D9D9D9]"
							iconLast={pictures.ArrowDown}
						/>
					</div>
					<div class="col-span-2">
						<Input
							placeholder="Изображение товара "
							className="w-full h-8.25  gap-2.5  border border-[#D9D9D9]"
							iconLast={pictures.Clip}
						/>
					</div>
				</div>

				<div class="flex justify-center py-4">
					<Button
						variant="outline"
						class="flex h-8.75 w-132.75 items-center justify-center gap-1.75 bg-[#D9D9D9] p-2.5 text-center hover:cursor-pointer "
						>Добавить</Button
					>
				</div>
			</div>
		</div>
	</div>
{/if}
