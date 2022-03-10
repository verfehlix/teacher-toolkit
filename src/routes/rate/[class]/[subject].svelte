<script lang="ts">
	import { subjects } from '../../../store';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Bewerten</title>
</svelte:head>

<h1 class="text-6xl text-black text-center underline decoration-sky-500 mb-8">
	{$page.params.class} - {$page.params.subject}
</h1>
