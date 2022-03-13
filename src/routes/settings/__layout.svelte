<script lang="ts">
	import ClassEditor from '../../components/settings/ClassEditor.svelte';
	import PageTitle from '../../components/shared/PageTitle.svelte';
	import { page } from '$app/stores';

	console.log($page);
</script>

<svelte:head>
	<title>Einstellungen</title>
</svelte:head>

<PageTitle title="Einstellungen" />
<div class="grid grid-cols-2 gap-4">
	<div class="border p-4 h-full">
		<ClassEditor />
	</div>
	<div class="p-4 h-full" class:border={$page.url.pathname !== '/settings'}>
		<slot />
	</div>
</div>
