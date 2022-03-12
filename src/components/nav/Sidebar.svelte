<script lang="ts">
	import SidebarLink from './SidebarLink.svelte';
</script>

<nav class="sidebar">
	<ul>
		<li>
			<SidebarLink href="/rate" selectedWhen={['/rate']} linkText="Bewerten" />
		</li>
		<li>
			<SidebarLink href="/settings" selectedWhen={['/settings']} linkText="Einstellungen" />
		</li>
	</ul>
</nav>

<style>
	.sidebar {
		position: fixed;
		width: 20vw;
		height: 100%;

		border-right: 1px solid black;

		padding: 2rem;

		box-shadow: 10px 0 5px -2px #ccc;
	}
</style>
