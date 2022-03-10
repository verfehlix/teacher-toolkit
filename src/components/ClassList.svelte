<script lang="ts">
	import { flip } from 'svelte/animate';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { schoolClasses } from '../store';

	const deleteSchoolClass = (schoolClassToBeDeleted) => {
		schoolClasses.update((existingSchoolClasses) =>
			existingSchoolClasses.filter(
				(currentSchoolClass) => currentSchoolClass !== schoolClassToBeDeleted
			)
		);
	};

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

<label class="block text-gray-700 text-sm font-bold mb-2" for="newClassInput"> Klassen </label>

<div>
	{#each $schoolClasses as schoolClass, index (schoolClass)}
		<div
			class="border-2 rounded-l p-3 mb-4"
			class:bg-slate-200={$page.params.schoolClass === schoolClass}
			class:bg-white={draggingIndex === index}
			class:bg-blue-500={hoveringIndex === index}
			draggable={true}
			animate:flip
			on:dragstart={(event) => dragstart(event, index)}
			on:drop={(event) => drop(event, index)}
			on:dragover={(event) => event.preventDefault()}
			on:dragenter={(event) => {
				event.preventDefault();
				hoveringIndex = index;
			}}
		>
			<div class="flex flex-row gap-4 justify-between items-center">
				<p class="text-xl text-gray-700">{schoolClass}</p>
				<button
					class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
					on:click={() => goto(`/settings/${schoolClass}/students`)}>Schüler:innen</button
				>
				<button
					class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded"
					on:click={() => goto(`/settings/${schoolClass}/subjects`)}>Fächer</button
				>
				<button
					class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
					on:click={() => deleteSchoolClass(schoolClass)}>-</button
				>
			</div>
		</div>
	{/each}
</div>
