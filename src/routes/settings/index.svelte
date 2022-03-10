<script lang="ts">
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
	<title>Settings</title>
</svelte:head>

<h1>Classes</h1>
<input type="text" bind:value={schoolClassInput} />
<button on:click={addSchoolClass}>add class</button>
<ul>
	{#each $schoolClasses as schoolClass}
		<li>
			<div style="display: flex; flex-direction: row; gap: 1rem;">
				<p>{schoolClass}</p>
				<button on:click={() => deleteSchoolClass(schoolClass)}>del</button>
			</div>
		</li>
	{/each}
</ul>
