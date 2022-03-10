<script lang="ts">
	import { subjects } from '../../../store';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Bewerten</title>
</svelte:head>

<h1 class="text-6xl text-black text-center underline decoration-sky-500 mb-8">
	Klasse: {$page.params.class} - Fach wählen
</h1>
<div class="h-full w-full grid grid-rows-3 grid-cols-3 gap-8">
	{#each $subjects as subject}
		<div
			class="bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 shadow-l rounded-xl p-8 flex justify-center items-center hover:shadow-xl hover:cursor-pointer"
			on:click={() => goto(`/rate/${$page.params.class}/${subject}`)}
		>
			<h1 class="text-6xl text-white">{subject}</h1>
		</div>
	{/each}
</div>
