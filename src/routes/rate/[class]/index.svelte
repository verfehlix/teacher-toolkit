<script lang="ts">
	import { subjects } from '../../../store';
	import { page } from '$app/stores';
	import SubjectBox from '../../../components/SubjectBox.svelte';
	import PageTitle from '../../../components/PageTitle.svelte';
	import { Color } from '../../../util/Color';
</script>

<svelte:head>
	<title>Bewerten</title>
</svelte:head>

<PageTitle title={`Klasse: ${$page.params.class} - Fach wählen`} />

<div class="h-full w-full grid grid-rows-3 grid-cols-3 gap-8">
	{#each $subjects as subject}
		<SubjectBox {subject} color={Color.ROSE} />
	{/each}
</div>
