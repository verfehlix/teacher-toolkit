<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let schoolClass: string;
</script>

{#if $page.url.toString().endsWith('/color') && $page.params.schoolClass === schoolClass}
	<div
		class="mt-1 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 w-4 h-4 rounded-full cursor-pointer border-2 border-slate-500"
		on:click={() => goto(`/settings/${schoolClass}/color`)}
	/>
{:else}
	<div
		class="mt-1 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 w-4 h-4 rounded-full cursor-pointer"
		on:click={() => goto(`/settings/${schoolClass}/color`)}
	/>
{/if}
