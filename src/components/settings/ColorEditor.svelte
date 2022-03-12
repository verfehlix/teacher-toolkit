<!-- // TODO: add functionality to add / remove students -->
<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { colors } from '../../util/Color';
</script>

<p class="block text-gray-700 text-sm font-bold mb-2">
	Farbe für Klasse {$page.params.schoolClass}
</p>

<p class="block text-gray-700 text-sm font-bold mb-2">Aktuelle Farbe:</p>
<div
	class={`rounded-xl hover:cursor-pointer w-24 h-16 ${
		colors.find((color) => color.name === 'Relaxed Rose').css
	}`}
	title="Relaxed Rose"
/>

<p class="block text-gray-700 text-sm font-bold mb-2">Neue Farbe auswählen:</p>
<div class="h-full w-full grid grid-cols-4 gap-2">
	{#each colors as color}
		<div class={`rounded-xl hover:cursor-pointer w-24 h-16 ${color.css}`} title={color.name} />
	{/each}
</div>
<button
	class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
	on:click={() => goto(`/settings`)}>Fertig</button
>
