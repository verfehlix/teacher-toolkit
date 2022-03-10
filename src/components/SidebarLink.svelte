<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let selectedWhen: string[];
	export let linkText: string;

	$: selected = selectedWhen.some((argh) => $page.url.pathname.startsWith(argh));
</script>

<a class:selected class="no-underline hover:underline" {href}> {linkText} </a>

<style>
	.selected {
		color: red;
	}
</style>
