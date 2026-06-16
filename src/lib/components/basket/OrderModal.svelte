<script lang='ts'>
	import Button from "../Button.svelte";
import Input from "../Input.svelte";
let addres:string = $state('')
let floor:string = $state('')
let flat:string = $state('')
let entrance:string = $state('')
let comaBuilding:string = $state('')
let payCash:boolean = $state(false)
let tabs: 'доставка'  | 'самовывоз' = $state('доставка');
let {isOpenOrderModal = $bindable(false)} = $props()

</script>

{#if isOpenOrderModal}
 <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
<div class="bg-white p-6 rounded-3xl w-150">
    {#if tabs === 'доставка'}
    <div class="flex flex-col gap-3">
    <div class="flex justify-end">
    <Button 
    size='sm'
    variant='outline'
    onClick={() => isOpenOrderModal = false}
    >✕</Button>
    </div>
    <div class="flex gap-4 justify-around">
    <Button
    size='sm'
    variant='outline'
    onClick={() => tabs = 'доставка' }
    >Доставка</Button>
      <Button
    size='sm'
    variant='outline'
    onClick={() => tabs = 'самовывоз' }
    >Самовывоз</Button>
    </div>
        <p class="font-bold">Укажите ваш адрес</p>
        <div class="grid grid-cols-2 gap-3">
            <div class="col-span-2">
                <Input 
               placeholder='Адрес'
                bind:value={addres}
                />
            </div>
            <div>
                <Input 
               placeholder='Квартира'
                bind:value={flat}
                />
            </div>
            <div>
                <Input 
               placeholder='Подъезд'
                bind:value={entrance}
                />
            </div>
            <div>
                <Input 
               placeholder='Корпус'
                bind:value={comaBuilding}
                />
            </div>
            <div>
                <Input 
               placeholder='Этаж'
                bind:value={floor}
                />
            </div>
        </div>
        <div class="flex items-center gap-2">
            <Input 
            type="checkbox"
            bind:checked={payCash}
            label='Оплата наличными'
            />

        </div>
        <div class="flex justify-center">
            <Button
            variant='outline'
            label='Заказать'
            ></Button>
        </div>
        </div>

  
   {:else if tabs === 'самовывоз'}
    <div class="flex flex-col gap-3">
    <div class="flex justify-end">
    <Button 
    size='sm'
    variant='outline'
    onClick={() => isOpenOrderModal = false}
    >✕</Button>
    </div>
    <div class="flex gap-4 justify-around">
    <Button
    size='sm'
    variant='outline'
    onClick={() => tabs = 'доставка' }
    >Доставка</Button>
      <Button
    size='sm'
    variant='outline'
    onClick={() => tabs = 'самовывоз' }
    >Самовывоз</Button>
    </div>
    <div class="flex flex-col items-center  py-4 gap-4">
    <div class="border rounded-2xl p-6 w-full">
    <div class="space-y-3">
    <div>
    <p>Заказ можно забрать по адресу:</p>
    <p>394028, г. Москва, ул. Волгоградская, 24</p>
    </div>
    <div>
        <p>Часы работы:</p>
        <p>Понедельник - пятница<br>9:00 - 18:00</p>
    </div>
    </div>
    </div>
<div class="flex justify-center">
    <Button
            variant='outline'
            label='Заказать'
            ></Button>
</div>
            </div>
    </div>
  
    {/if}
    </div>
</div>
{/if}