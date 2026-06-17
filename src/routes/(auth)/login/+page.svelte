<script lang="ts">
  import { Tabs } from 'bits-ui';
  import Input from '$lib/components/Input.svelte';
  import Button from '$lib/components/Button.svelte';
	import { goto } from '$app/navigation';
	import { getToken, getUser } from '$lib/api/users';

	let loginEmail: string = $state('');
	let loginPassword: string = $state('');
	let registerEmail: string = $state('');
	let registerPassword: string = $state('');
	let registerFirstName: string = $state('');
	let registerLastName: string = $state('');
	let registerPhone: string = $state('');

  async function handleLogin(): Promise<void> {
    const email = loginEmail;
    const password = loginPassword;
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('user', JSON.stringify(data.user));
			goto('/');
    } else {
      alert('Неверный email или пароль');
    }
  }

	async function loginUser(): Promise<void> {
    const email = registerEmail;
    const password = registerPassword;
    const phone = registerPhone;
    const firstName = registerFirstName;
    const lastName = registerLastName;

    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, phone, firstName, lastName })
    });
    const data = await response.json();

    if (response.ok) {
			getToken();
			getUser();
		goto('/');
    } else {
      alert(data.message || 'Ошибка регистрации');
    }
  }
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-50">
  <div class="w-96 rounded-lg bg-white p-6 shadow-md">
    <h1 class="mb-6 text-center text-2xl font-bold">Sportline</h1>

    <Tabs.Root value="login">
			<Tabs.List class="mb-6 grid  grid-cols-2 gap-2">
        <Tabs.Trigger
          value="login"
					class="rounded-lg bg-gray-100 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
        >
          Вход
        </Tabs.Trigger>
        <Tabs.Trigger
          value="register"
          class="rounded-lg bg-gray-100 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
        >
          Регистрация
        </Tabs.Trigger>
      </Tabs.List>

			<Tabs.Content value="login" class="flex h-65 justify-around flex-col gap-4">
				<Input label="Email" type="email" bind:value={loginEmail} placeholder="Введите логин" />
				<Input
					label="Пароль"
					type="password"
					bind:value={loginPassword}
					placeholder="введите пароль"
				/>
				<Button label="Войти" size="sm" class='w-full' variant='outline' onClick={handleLogin} />
      </Tabs.Content>

			<Tabs.Content value="register" class="flex h-85 flex-col gap-3">
				<Input label="Email" type="email" bind:value={registerEmail} placeholder="Введите email" />
				<Input
					label="Пароль"
					type="password"
					bind:value={registerPassword}
					placeholder="введите пароль"
				/>
        <div class="grid grid-cols-2 gap-3">
					<Input label="Имя" type="text" bind:value={registerFirstName} placeholder="Введите имя" />
					<Input
						label="Фамилия"
						type="text"
						bind:value={registerLastName}
						placeholder="введите фамилию"
					/>
        </div>
        <Input label="Телефон" bind:value={registerPhone} placeholder="введите номер телефона" />
				<Button label="Зарегистрироваться" size="md" onClick={loginUser} />
      </Tabs.Content>
    </Tabs.Root>
  </div>
</div>
