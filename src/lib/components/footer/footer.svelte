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

<div class="flex justify-between px-8 py-8">
	<div>
		<p class=" mb-2">Информация о нас</p>
		<div class="flex flex-col gap-1 text-sm text-gray-600">
			<p>{storeInfo.address}</p>
			<p>{storeInfo.phone}</p>
			<p>{storeInfo.email}</p>
		</div>
	</div>

	<div>
		<p class=" mb-2">Часы работы</p>
		<div class="flex flex-col gap-1 text-sm text-gray-600">
			<p>{storeInfo.workingHours.days}</p>
			<p>{storeInfo.workingHours.hours}</p>
		</div>
	</div>
</div>
