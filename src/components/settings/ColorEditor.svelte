<!-- // TODO: add functionality to add / remove students -->
<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { colors, type Color, type ColorName } from '../../util/Color';
	import ColoredBox from '../shared/ColoredBox.svelte';

	const currentColorName = 'Oceanic';

	const allColorNames: ColorName[] = Object.keys(colors) as ColorName[];
</script>

<p class="block text-gray-700 text-sm font-bold mb-2">
	Farbe für Klasse {$page.params.schoolClass}
</p>

<p class="mt-8 block text-gray-700 text-sm font-bold mb-2">Aktuelle Farbe:</p>
<ColoredBox colorName={currentColorName}>
	<p>{currentColorName}</p></ColoredBox
>

<p class="mt-8 block text-gray-700 text-sm font-bold mb-2">Neue Farbe auswählen:</p>
<div class="h-full w-full grid grid-cols-3 gap-8 max-h-96 p-4 overflow-y-scroll">
	{#each allColorNames as colorName}
		<ColoredBox {colorName}><p>{colorName}</p></ColoredBox>
	{/each}
</div>
<button
	class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
	on:click={() => goto(`/settings`)}>Fertig</button
>
