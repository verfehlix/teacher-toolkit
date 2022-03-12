<script lang="ts">
	import { goto } from '$app/navigation';

	import { schoolClasses } from '../../store';
	import ClassBox from '../../components/shared/ColoredBox.svelte';
	import PageTitle from '../../components/shared/PageTitle.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<PageTitle title="Wähle eine Klasse" />
<div class="h-full w-full grid grid-rows-3 grid-cols-3 gap-8">
	{#each $schoolClasses as schoolClass}
		<ClassBox colorName="Hyper" onClick={() => goto(`/rate/${schoolClass.name}`)}>
			<h1 class="text-6xl text-white">{schoolClass.name}</h1>
		</ClassBox>
	{/each}
</div>
