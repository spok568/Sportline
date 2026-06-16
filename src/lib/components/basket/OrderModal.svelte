<script lang='ts'>
	import Button from "../Button.svelte";
import Input from "../Input.svelte";
let addres:string = $state('')
let floor:string = $state('')
let flat:string = $state('')
let entrance:string = $state('')
let comaBuilding:string = $state('')
let payCash:boolean = $state(false)
let tabs = $state('доставка')
</script>
{#if tabs === 'доставка'}
    <div>
        <p class="font-bolid">Укажите ваш адресс</p>
        <div class="grid grid-cols-5">
            <div>
                <Input 
               placeholder='Адресс'
                value={addres}
                />
            </div>
            <div>
            <div>
                <Input 
               placeholder='Квартира'
                value={flat}
                />
                </div>
                <div>
                      <Input 
               placeholder='Этаж'
                value={floor}
                />
                </div>
            </div>
            <div>
            <div>
                     <Input 
               placeholder='Подъезд'
                value={entrance}
                />
                </div>
                <div>
                      <Input 
               placeholder='Корпус'
                value={comaBuilding}
                />
                </div>
            </div>

        </div>
        <div>
            <Input 
            checked={payCash}
            />
        </div>
        <div>
            <Button
            variant='outline'
            label='Заказать'
            >Заказать</Button>
        </div>
    </div>
    {:else}
    <div>
    <div>
    <p>Заказ можно забрать по адресу:</p>
    <p>394028, г. Москва, ул. Волгоградская, 24</p>
    </div>
    <div>
        <p>Часы работы:</p>
        <p>Понедельник - пятница
9:00 - 18:00</p>
    </div>
    <Button
            variant='outline'
            label='Заказать'
            >Заказать</Button>
    </div>
{/if}

