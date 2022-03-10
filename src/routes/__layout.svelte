<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<nav class="sidebar">
	<ul>
		<li>
			<a class:selected={$page.url.pathname === '/'} class="no-underline hover:underline" href="/">
				Home
			</a>
		</li>
		<li>
			<a
				class:selected={$page.url.pathname === '/classes'}
				class="no-underline hover:underline"
				href="/classes"
			>
				Classes
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
	}

	.main {
		grid-column-start: 2;
	}
</style>
