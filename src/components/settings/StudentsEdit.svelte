<!-- // TODO: rename into StudentsEditor & add functionality to add / remove students -->
<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	const students = ['Hannah Günter', 'Leni Weinem', 'Tilo Masch', 'Max Jung', 'Fabian Stegoman'];
</script>

<label class="block text-gray-700 text-sm font-bold mb-2" for="newClassInput">
	Schüler:innen der Klasse {$page.params.schoolClass}</label
>

<ul>
	{#each students as student}
		<li class="border-2 rounded-l p-3 mb-4">
			<div class="flex flex-row gap-4 justify-between items-center">
				<p class="text-xl text-gray-700">{student}</p>
			</div>
		</li>
	{/each}
</ul>
<button
	class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
	on:click={() => goto(`/settings`)}>Fertig</button
>
