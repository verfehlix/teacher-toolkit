<!-- // TODO: add functionality to add / remove subjects -->
<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	const subjects = ['Deutsch', 'Englisch', 'Mathe', 'Kunst'];
</script>

<label class="block text-gray-700 text-sm font-bold mb-2" for="newClassInput">
	Fächer in der Klasse {$page.params.schoolClass}</label
>

<ul>
	{#each subjects as subject}
		<li class="border-2 rounded-l p-3 mb-4">
			<div class="flex flex-row gap-4 justify-between items-center">
				<p class="text-xl text-gray-700">{subject}</p>
			</div>
		</li>
	{/each}
</ul>
<button
	class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
	on:click={() => goto(`/settings`)}>Fertig</button
>
