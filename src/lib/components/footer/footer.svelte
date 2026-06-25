<script lang="ts">
	let storeInfo = $state({
		brand: '',
		address: '',
		phone: '',
		email: '',
		workingHours: {
			days: '',
			hours: ''
		},
		copyright: ''
	});
	export async function footer() {
		let response = await fetch('http://localhost:3000/api/store-info', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		if (response.ok) {
			const data = await response.json();
			storeInfo.brand = data.brand;
			storeInfo.address = data.address;
			storeInfo.phone = data.phone;
			storeInfo.email = data.email;
			storeInfo.workingHours.days = data.workingHours?.days;
			storeInfo.workingHours.hours = data.workingHours?.hours;
			storeInfo.copyright = data.copyright;
		}
	}
	footer();
</script>

<div class="flex justify-around gap-2.5 bg-[#EDEDED]">
	<div class="gap-8">
		<p class=" mb-2 font-family-inter text-[10px] leading-14 tracking-[1px] uppercase opacity-40">
			Информация о нас
		</p>
		<div class="flex flex-col gap-1 text-sm">
			<p class="font-family-inter text-[12px] uppercase opacity-60">{storeInfo.address}</p>
			<p class="font-family-inter text-[12px] uppercase opacity-60">{storeInfo.phone}</p>
			<div class="border-with w-18 border-b">
				<p class="font-family-inter text-[12px] lowercase opacity-60">{storeInfo.email}</p>
			</div>
		</div>
	</div>

	<div class="gap-8">
		<p
			class=" font-family-inter text-[10px] leading-14 font-medium tracking-[1px] uppercase opacity-40"
		>
			Часы работы
		</p>
		<div class="flex flex-col gap-1 text-sm">
			<p class="font-family-inter text-[12px] font-medium uppercase opacity-60">
				{storeInfo.workingHours.days}
			</p>
			<p class="font-family-inter text-[12px] font-medium uppercase opacity-60">
				{storeInfo.workingHours.hours}
			</p>
		</div>
	</div>
</div>
<div class="flex justify-center bg-[#EDEDED] py-6">
	<p class="font-family-inter text-[10px] leading-13 lowercase opacity-40">{storeInfo.copyright}</p>
</div>
