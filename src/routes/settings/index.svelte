<script lang="ts">
	import PageTitle from '../../components/PageTitle.svelte';
	import { schoolClasses } from '../../store';

	let schoolClassInput = '';

	const addSchoolClass = () => {
		schoolClasses.update((existingSchoolClasses) => [...existingSchoolClasses, schoolClassInput]);
		schoolClassInput = '';
	};

	const deleteSchoolClass = (schoolClassToBeDeleted) => {
		schoolClasses.update((existingSchoolClasses) =>
			existingSchoolClasses.filter(
				(currentSchoolClass) => currentSchoolClass !== schoolClassToBeDeleted
			)
		);
	};
</script>

<svelte:head>
	<title>Einstellungen</title>
</svelte:head>

<PageTitle title="Einstellungen" />
<div class="max-w-xs">
	<label class="block text-gray-700 text-sm font-bold mt-8 mb-2" for="newClassInput">
		Klassen
	</label>

	<ul>
		{#each $schoolClasses as schoolClass}
			<li>
				<div class="flex flex-row gap-4 justify-between">
					<p>{schoolClass}</p>
					<button
						class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
						on:click={() => deleteSchoolClass(schoolClass)}>-</button
					>
				</div>
			</li>
		{/each}
	</ul>

	<label class="block text-gray-700 text-sm font-bold mt-8 mb-2" for="newClassInput">
		Neue Klasse hinzufügen
	</label>
	<div class="flex flex-row gap-4 justify-between" id="newClassInput">
		<input
			class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="text"
			placeholder="Klassenname..."
			bind:value={schoolClassInput}
		/>
		<button
			class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
			on:click={addSchoolClass}>+</button
		>
	</div>
</div>
