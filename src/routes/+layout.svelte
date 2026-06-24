<script>
	import '../app.css';
	import bgImage from '$lib/assets/main-background.png';
	let { children } = $props();
</script>

<div style:background-image="url({bgImage})">
	{@render children()}
</div>
