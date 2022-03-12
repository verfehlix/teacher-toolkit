<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { colors, type ColorName } from '../../util/Color';
	import { schoolClasses, type SchoolClass } from '../../store';
	import ColoredBox from '../shared/ColoredBox.svelte';

	$: currentClassColorName = $schoolClasses.find(
		(schoolClass) => schoolClass.name === $page.params.schoolClass
	).colorName;

	const setColorForClass = (className: string, colorName: ColorName) => {
		const classToUpdate = $schoolClasses.find((schoolClass) => schoolClass.name === className);

		const newClasses: SchoolClass[] = $schoolClasses.map((oldClass) => {
			if (oldClass.name === className) {
				return {
					...oldClass,
					colorName
				};
			} else {
				return oldClass;
			}
		});

		schoolClasses.set(newClasses);
	};

	const allColorNames: ColorName[] = Object.keys(colors) as ColorName[];
</script>

<p class="block text-gray-700 text-sm font-bold mb-2">
	Aktuelle Farbe der Klasse {$page.params.schoolClass}:
</p>
<div class="grid grid-cols-3 gap-8 p-4 overflow-y-scroll">
	<ColoredBox colorName={currentClassColorName}>
		<p
			class:text-white={colors[currentClassColorName].textColor === 'light'}
			class:text-black={colors[currentClassColorName].textColor === 'dark'}
		>
			{currentClassColorName}
		</p></ColoredBox
	>
</div>

<p class="mt-8 block text-gray-700 text-sm font-bold mb-2">Neue Farbe auswählen:</p>
<div class="h-full w-full grid grid-cols-3 gap-8 max-h-80 p-4 overflow-y-scroll">
	{#each allColorNames as colorName}
		<ColoredBox {colorName} onClick={() => setColorForClass($page.params.schoolClass, colorName)}
			><p
				class:text-white={colors[colorName].textColor === 'light'}
				class:text-black={colors[colorName].textColor === 'dark'}
			>
				{colorName}
			</p></ColoredBox
		>
	{/each}
</div>

<button
	class="mt-8 w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
	on:click={() => goto(`/settings`)}>Fertig</button
>
