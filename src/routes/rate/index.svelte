<script lang="ts">
	import { schoolClasses } from '../../store';
	import { Color } from '../../util/Color';
	import ClassBox from '../../components/rate/ClassBox.svelte';
	import PageTitle from '../../components/shared/PageTitle.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<PageTitle title="Wähle eine Klasse" />
<div class="h-full w-full grid grid-rows-3 grid-cols-3 gap-8">
	{#each $schoolClasses as schoolClass}
		<ClassBox className={schoolClass} color={Color.RED} />
	{/each}
</div>
