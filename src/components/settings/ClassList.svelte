<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { schoolClasses } from '../../store';
	import ColorPicker from './ColorPicker.svelte';

	const deleteSchoolClass = (deletedClassName: string) => {
		schoolClasses.update((existingSchoolClasses) =>
			existingSchoolClasses.filter(
				(currentSchoolClass) => currentSchoolClass.name !== deletedClassName
			)
		);
	};

	// TODO: can the use directive be used to re-use this functionality?
	let draggingIndex: number | null = null;
	let hoveringIndex: number | null = null;

	const drop = (event: DragEvent, target: number) => {
		event.preventDefault();

		draggingIndex = null;

		event.dataTransfer.dropEffect = 'move';

		const start = parseInt(event.dataTransfer.getData('text/plain'));
		const newTracklist = $schoolClasses;

		if (start < target) {
			newTracklist.splice(target + 1, 0, newTracklist[start]);
			newTracklist.splice(start, 1);
		} else {
			newTracklist.splice(target, 0, newTracklist[start]);
			newTracklist.splice(start + 1, 1);
		}
		schoolClasses.set(newTracklist);
		hoveringIndex = null;
	};

	const dragstart = (event: DragEvent, index: number) => {
		draggingIndex = index;
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.dropEffect = 'move';
		event.dataTransfer.setData('text/plain', `${index}`);
	};
</script>

<p class="block text-gray-700 text-sm font-bold mb-2">Klassen</p>

<!-- // TODO: css besser machen, buttons zusammen gemeinsam umbrechen -->
<!-- // TODO: drag und drop nur über kind, nicht über gesamtes div -->
<div>
	{#each $schoolClasses as schoolClass, index (schoolClass)}
		<div
			class="border-2 rounded-l p-3 mb-4"
			class:bg-slate-200={$page.params.schoolClass === schoolClass.name}
			class:bg-white={draggingIndex === index}
			class:border-blue-500={hoveringIndex === index}
			draggable={true}
			on:dragstart={(event) => dragstart(event, index)}
			on:drop={(event) => drop(event, index)}
			on:dragover={(event) => event.preventDefault()}
			on:dragenter={(event) => {
				event.preventDefault();
				hoveringIndex = index;
			}}
		>
			<div class="flex flex-row gap-4 justify-between items-center flex-wrap">
				<div class="flex flex-row gap-4 justify-start items-center flex-nowrap">
					<p
						class="text-xl text-gray-700"
						class:font-bold={$page.params.schoolClass === schoolClass.name}
					>
						{schoolClass.name}
					</p>
					<ColorPicker
						colorName={schoolClass.colorName}
						selected={$page.url.toString().endsWith('/color') &&
							$page.params.schoolClass === schoolClass.name}
						onClick={() => goto(`/settings/${schoolClass.name}/color`)}
					/>
				</div>

				<div class="flex flex-row gap-2 justify-end items-center flex-nowrap">
					<button
						class="bg-green-500 hover:bg-green-400 text-white text-xs font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded"
						class:bg-green-400={$page.url.toString().endsWith('/students') &&
							$page.params.schoolClass === schoolClass.name}
						class:border-green-500={$page.url.toString().endsWith('/students') &&
							$page.params.schoolClass === schoolClass.name}
						on:click={() => goto(`/settings/${schoolClass.name}/students`)}
					>
						{schoolClass.students.length} Schüler:innen</button
					>
					<button
						class="bg-teal-500 hover:bg-teal-400 text-white text-xs font-bold py-2 px-2 border-b-4 border-teal-700 hover:border-teal-500 rounded"
						class:bg-teal-400={$page.url.toString().endsWith('/subjects') &&
							$page.params.schoolClass === schoolClass.name}
						class:border-teal-500={$page.url.toString().endsWith('/subjects') &&
							$page.params.schoolClass === schoolClass.name}
						on:click={() => goto(`/settings/${schoolClass.name}/subjects`)}
						>{schoolClass.subjects.length} Fächer</button
					>
					<button
						class="bg-red-500 hover:bg-red-400 text-white text-xs font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
						on:click={() => deleteSchoolClass(schoolClass.name)}>-</button
					>
				</div>
			</div>
		</div>
	{/each}
</div>
