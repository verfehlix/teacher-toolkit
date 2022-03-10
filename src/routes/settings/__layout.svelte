<script lang="ts">
	import ClassEditor from '../../components/ClassEditor.svelte';
	import PageTitle from '../../components/PageTitle.svelte';
</script>

<svelte:head>
	<title>Einstellungen</title>
</svelte:head>

<PageTitle title="Einstellungen" />
<div class="grid grid-cols-2 gap-4">
	<div class="border p-4">
		<ClassEditor />
	</div>
	<div class="border p-4">
		<slot />
	</div>
</div>
