<script lang="ts">
	import { page } from '$app/stores';
	import PageTitle from '../../../components/shared/PageTitle.svelte';
</script>

<svelte:head>
	<title>Bewerten</title>
</svelte:head>

<PageTitle title={`${$page.params.schoolClass} - ${$page.params.subject}`} />

<!-- TODO: list all students + rate buttons (--, -, 0, +, ++, krank) -->
