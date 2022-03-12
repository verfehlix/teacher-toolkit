<script lang="ts">
	import { subjects } from '../../../store';
	import { page } from '$app/stores';
	import SubjectBox from '../../../components/rate/SubjectBox.svelte';
	import PageTitle from '../../../components/shared/PageTitle.svelte';
</script>

<svelte:head>
	<title>Bewerten</title>
</svelte:head>

<PageTitle title={`Klasse: ${$page.params.schoolClass} - Fach wählen`} />

<div class="h-full w-full grid grid-rows-3 grid-cols-3 gap-8">
	{#each $subjects as subject}
		<SubjectBox {subject} color="Sunset" />
	{/each}
</div>
