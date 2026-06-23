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

function order(){
    if(addres && floor && flat && entrance && comaBuilding){
                      isOpenOrderModal = false
          alert('Заказ успешно заказан')

    }else{
        alert('заполните все поля')
    }

  
}

</script>

{#if isOpenOrderModal}
 <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
<div class="bg-white p-6  w-[631px] h-[400px] relative">
 <div class=" absolute right-1 top-0.5">
    <Button 
    size='sm'
    variant='noBorder'
    onClick={() => isOpenOrderModal = false}
    class=' hover:cursor-pointer'
    >✕</Button>
    </div>
    {#if tabs === 'доставка'}
    <div class="   relative flex flex-col gap-3">
   
    <div class="flex p-[4px] h-[42] w-[531] justify-around items-center ">
    <Button
    size='sm'
    variant='outline'
    onClick={() => tabs = 'доставка' }
    class='w-[261px] h-[34px] pt-[7px] pb-[7px] text-white bg-black'
    >Доставка</Button>
      <Button
    size='sm'
    variant='outline'
    onClick={() => tabs = 'самовывоз' }
      class='w-[261px] h-[34px] pt-[7px] pb-[7px]'
    >Самовывоз</Button>
    </div>
        <p class="font-bold">Укажите ваш адрес</p>
        <div class="grid grid-cols-2 gap-3">
            <div class="col-span-2">
                <Input 
               placeholder='Адрес'
                bind:value={addres}
                className='w-full h-[33px] px-[50px] gap-[10px]'
                />
            </div>
            <div class="">
                <Input 
               placeholder='Квартира'
                bind:value={flat}
                className='w-full h-[33px] px-[50px] gap-[10px]'
                />
            </div>
            <div class="">
                <Input 
               placeholder='Этаж'
                bind:value={floor}
                       className='w-full h-[33px]  px-[50px] gap-[10px]'
                />
            </div>
            <div>
                <Input 
               placeholder='Подъезд'
                bind:value={entrance}
                       className='w-full h-[33px] px-[50px] gap-[10px]'
                />
            </div>
            <div class="col-span-1">
                <Input 
               placeholder='Корпус'
                bind:value={comaBuilding}
                       className='w-full h-[33px] px-[50px] gap-[10px]'
                />
            </div>
        </div>
        <div class="flex items-center gap-[10px] p-2">
            <Input 
            inputType="checkbox"
            bind:checked={payCash}
            text='Оплата наличными'
            />

        </div>
        <div class="flex justify-center py-2">
            <Button
            variant='outline'
                 onClick={order}
                 class='p-[10px] gap-[7px] w-[531px] h-[35px] flex items-center bg-[#D9D9D9] justify-center text-center text-center '
            >Заказать</Button>
        </div>
        </div>

  
   {:else if tabs === 'самовывоз'}
    <div class="flex flex-col gap-3">
      <div class="flex p-[4px] h-[42] w-[531] justify-around  items-center">
        <Button
          size='sm'
          variant='outline'
          onClick={() => tabs = 'доставка'}
          class='w-[261px] h-[34px] pt-[7px] pb-[7px] '
        >Доставка</Button>
        <Button
          size='sm'
          variant='outline'
          onClick={() => tabs = 'самовывоз'}
          class='w-[261px] h-[34px] pt-[7px] pb-[7px] text-white bg-black'
        >Самовывоз</Button>
      </div>

      <div class="flex flex-col gap-4 py-4 pl-2">
        <div class="gap-[10px] py-[10px]">
          <p class="font-bold  text-[16px]">Заказ можно забрать по адресу:</p>
          <p class="mt-2 text-[16px]">394028, г. Москва, ул. Волгоградская, 24</p>
        </div>
        <div class="gap-[10px] py-[10px]">
          <p class=" text-sm">Часы работы:</p>
          <p class="mt-1 text-sm ">Понедельник - пятница<br>9:00 - 18:00</p>
        </div>
      </div>

      <div class="flex justify-center py-2">
        <Button
          variant='outline'
          label='Заказать'
          class='p-[10px] gap-[7px] w-[531px] h-[35px] flex items-center justify-center bg-[#D9D9D9]'
          onClick={order}
        ></Button>
      </div>
    </div>
  
    {/if} 
    </div>
</div>
{/if}