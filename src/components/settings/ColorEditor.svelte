<!-- // TODO: add functionality to add / remove students -->
<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	const students = ['Hannah Günter', 'Leni Weinem', 'Tilo Masch', 'Max Jung', 'Fabian Stegoman'];
</script>

<label class="block text-gray-700 text-sm font-bold mb-2" for="newClassInput">
	Farbe für Klasse {$page.params.schoolClass}</label
>
<button
	class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
	on:click={() => goto(`/settings`)}>Fertig</button
>
