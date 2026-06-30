<script lang="ts">
	import Button from '../button.svelte';
	import { pictures } from '../icon/icons';
	import Input from '../input.svelte';
	let addres: string = $state('');
	let floor: string = $state('');
	let flat: string = $state('');
	let entrance: string = $state('');
	let comaBuilding: string = $state('');
	let payCash: boolean = $state(false);
	let tabs: 'доставка' | 'самовывоз' = $state('доставка');
	let { isOpenOrderModal = $bindable(false) } = $props();

	function order() {
		if (addres && floor && flat && entrance && comaBuilding) {
			isOpenOrderModal = false;
			alert('Заказ успешно заказан');
		} else {
			alert('заполните все поля');
		}
	}
</script>

{#if isOpenOrderModal}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
		<div class="relative h-100 w-157.75 bg-white p-6">
			<div class=" absolute top-0.5 right-1">
				<Button
					size="sm"
					variant="noBorder"
					iconFirst={pictures.Cross}
					onClick={() => (isOpenOrderModal = false)}
					class=" hover:cursor-pointer"
				></Button>
			</div>
			{#if tabs === 'доставка'}
				<div class="   relative flex flex-col gap-3">
					<div class="flex h-[42] w-[531] items-center justify-around p-1">
						<Button
							size="sm"
							variant="outline"
							onClick={() => (tabs = 'доставка')}
							class="h-8.5 w-65.25 bg-black pt-1.75 pb-1.75 text-white  hover:cursor-pointer"
							>Доставка</Button
						>
						<Button
							size="sm"
							variant="outline"
							onClick={() => (tabs = 'самовывоз')}
							class="  h-8.5 w-65.25 pt-1.75 pb-1.75 hover:cursor-pointer">Самовывоз</Button
						>
					</div>
					<p class="font-bold">Укажите ваш адрес</p>
					<div class="grid grid-cols-2 gap-3">
						<div class="col-span-2">
							<Input
								placeholder="Адрес"
								bind:value={addres}
								className="w-full h-8.25 px-12.5 gap-2.5"
							/>
						</div>
						<div class="">
							<Input
								placeholder="Квартира"
								bind:value={flat}
								className="w-full h-8.25 px-12.5 gap-2.5"
							/>
						</div>
						<div class="">
							<Input
								placeholder="Этаж"
								bind:value={floor}
								className="w-full h-8.25  px-12.5 gap-2.5"
							/>
						</div>
						<div>
							<Input
								placeholder="Подъезд"
								bind:value={entrance}
								className="w-full h-8.25 px-12.5 gap-2.5"
							/>
						</div>
						<div class="col-span-1">
							<Input
								placeholder="Корпус"
								bind:value={comaBuilding}
								className="w-full h-8.25 px-12.5 gap-2.5"
							/>
						</div>
					</div>
					<div class="flex items-center gap-2.5 p-2">
						<Input inputType="checkbox" bind:checked={payCash} text="Оплата наличными" />
					</div>
					<div class="flex justify-center py-2">
						<Button
							variant="outline"
							onClick={order}
							class="flex h-8.75 w-132.75 items-center justify-center gap-1.75 bg-[#D9D9D9] p-2.5 text-center hover:cursor-pointer "
							>Заказать</Button
						>
					</div>
				</div>
			{:else if tabs === 'самовывоз'}
				<div class="flex flex-col gap-3">
					<div class="flex h-[42] w-[531] items-center justify-around p-1">
						<Button
							size="sm"
							variant="outline"
							onClick={() => (tabs = 'доставка')}
							class="h-8.5 w-65.25 pt-1.75 pb-1.75 ">Доставка</Button
						>
						<Button
							size="sm"
							variant="outline"
							onClick={() => (tabs = 'самовывоз')}
							class="h-8.5 w-65.25 bg-black pt-1.75 pb-1.75 text-white">Самовывоз</Button
						>
					</div>

					<div class="flex flex-col gap-4 py-4 pl-2">
						<div class="gap-2.5 py-2.5">
							<p class="text-[16px] font-bold">Заказ можно забрать по адресу:</p>
							<p class="mt-2 text-[16px]">394028, г. Москва, ул. Волгоградская, 24</p>
						</div>
						<div class="gap-2.5 py-2.5">
							<p class=" text-sm">Часы работы:</p>
							<p class="mt-1 text-sm">Понедельник - пятница<br />9:00 - 18:00</p>
						</div>
					</div>

					<div class="flex justify-center py-2">
						<Button
							variant="outline"
							label="Заказать"
							class="flex h-8.75 w-132.75 items-center justify-center gap-1.75 bg-[#D9D9D9] p-2.5 hover:cursor-pointer"
							onClick={order}
						></Button>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
