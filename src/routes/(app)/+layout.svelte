<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
    let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex-1">
    {@render children()}
  </main>
  <Footer />
</div>