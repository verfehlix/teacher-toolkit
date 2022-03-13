<script lang="ts">
	import { dndzone, SOURCES, TRIGGERS } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { schoolClasses, type SchoolClass } from '../../store';
	import ColorPicker from './ColorPicker.svelte';

	const deleteSchoolClass = (deletedClassName: string) => {
		schoolClasses.update((existingSchoolClasses) =>
			existingSchoolClasses.filter(
				(currentSchoolClass) => currentSchoolClass.name !== deletedClassName
			)
		);
	};

	// drag & drop
	const flipDurationMs = 100;
	let dragDisabled = true;
	function handleConsider({ detail: { items } }: CustomEvent<DndEvent>) {
		schoolClasses.set(items as SchoolClass[]);
	}
	function handleFinalize({ detail: { items } }: CustomEvent<DndEvent>) {
		schoolClasses.set(items as SchoolClass[]);
		dragDisabled = true;
	}
	function startDrag(e) {
		e.preventDefault();
		dragDisabled = false;
	}
</script>

<p class="block text-gray-700 text-sm font-bold mb-2">Klassen</p>

<section
	use:dndzone={{ items: $schoolClasses, dragDisabled, flipDurationMs }}
	on:consider={handleConsider}
	on:finalize={handleFinalize}
>
	{#each $schoolClasses as schoolClass (schoolClass.id)}
		<div
			class="border-2 rounded-l p-3 mb-4"
			class:bg-slate-200={$page.params.schoolClass === schoolClass.name}
			animate:flip={{ duration: flipDurationMs }}
		>
			<div class="flex flex-row gap-4 justify-between items-center flex-wrap">
				<div class="flex flex-row gap-4 justify-start items-center flex-nowrap">
					<svg
						class="h-4 w-4 stroke-slate-700 hover:cursor-drag"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						on:mousedown={startDrag}
						on:touchstart={startDrag}
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
					</svg>

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
</section>
