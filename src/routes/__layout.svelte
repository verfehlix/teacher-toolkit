<script lang="ts">
	import '../app.css';
	import Sidebar from '../components/nav/Sidebar.svelte';
</script>

<Sidebar />

<div class="page">
	<div class="main">
		<slot />
	</div>
</div>

<style>
	.page {
		display: grid;
		grid-template-columns: 20vw auto;
	}
	.main {
		grid-column-start: 2;
		height: 100vh;
		padding: 2rem;
	}
</style>
