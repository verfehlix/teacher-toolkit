<script lang="ts">
	import { page } from '$app/stores';
	import PageTitle from '../../../components/PageTitle.svelte';
</script>

<svelte:head>
	<title>Bewerten</title>
</svelte:head>

<PageTitle title={`${$page.params.class} - ${$page.params.subject}`} />
