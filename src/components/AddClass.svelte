<script lang="ts">
	import { schoolClasses } from '../store';

	let schoolClassInput = '';

	const addSchoolClass = () => {
		schoolClasses.update((existingSchoolClasses) => [...existingSchoolClasses, schoolClassInput]);
		schoolClassInput = '';
	};
</script>

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
