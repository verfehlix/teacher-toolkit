<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
</script>

<nav class="sidebar">
	<ul>
		<li>
			<a
				class:selected={$page.url.pathname === '/home' || $page.url.pathname.startsWith('/rate')}
				class="no-underline hover:underline"
				href="/home"
			>
				Home
			</a>
		</li>
		<li>
			<a
				class:selected={$page.url.pathname === '/settings'}
				class="no-underline hover:underline"
				href="/settings"
			>
				Settings
			</a>
		</li>
	</ul>
</nav>

<div class="page">
	<div class="main">
		<slot />
	</div>
</div>

<style>
	.selected {
		color: red;
	}
	.page {
		display: grid;
		grid-template-columns: 20vw auto;
	}

	.sidebar {
		position: fixed;
		width: 20vw;
		height: 100%;

		border-right: 1px solid black;

		padding: 2rem;
	}

	.main {
		grid-column-start: 2;
		height: 100vh;
		padding: 2rem;
	}
</style>
