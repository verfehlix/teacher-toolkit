<script lang="ts">
	import { schoolClasses } from '../../store';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1 class="text-6xl text-black text-center underline decoration-sky-500 mb-8">Wähle eine Klasse</h1>
<div class="h-full w-full grid grid-rows-3 grid-cols-3 gap-8">
	{#each $schoolClasses as schoolClass}
		<div
			class="bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 shadow-l rounded-xl p-8 flex justify-center items-center hover:shadow-xl hover:cursor-pointer"
			on:click={() => goto(`/rate/${schoolClass}`)}
		>
			<h1 class="text-6xl text-white">{schoolClass}</h1>
		</div>
	{/each}
</div>
