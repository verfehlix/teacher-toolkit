<script lang="ts">
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
</script>

<label class="block text-gray-700 text-sm font-bold mb-2" for="newClassInput"> Klassen </label>

<ul>
	{#each $schoolClasses as schoolClass}
		<li
			class:bg-slate-200={$page.params.schoolClass === schoolClass}
			class="border-2 rounded-l p-3 mb-4"
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
		</li>
	{/each}
</ul>
