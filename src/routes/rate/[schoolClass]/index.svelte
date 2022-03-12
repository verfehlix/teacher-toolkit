<script lang="ts">
	import { page } from '$app/stores';
	import SubjectBox from '../../../components/rate/SubjectBox.svelte';
	import PageTitle from '../../../components/shared/PageTitle.svelte';
	const subjects = ['Deutsch', 'Englisch', 'Mathe', 'Kunst', 'Musik'];
</script>

<svelte:head>
	<title>Bewerten</title>
</svelte:head>

<PageTitle title={`Klasse: ${$page.params.schoolClass} - Fach wählen`} />

<div class="h-full w-full grid grid-rows-3 grid-cols-3 gap-8">
	{#each subjects as subject}
		<SubjectBox {subject} colorName="Witch" />
	{/each}
</div>
