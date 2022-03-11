<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import type { Color } from '../../util/Color';
	import { mapColorToCss } from '../../util/Color';

	export let subject: string;
	export let color: Color;

	$: cssColorString = mapColorToCss(color);
</script>

<div
	class="bg-gradient-to-tl {cssColorString} shadow-l rounded-xl p-8 flex justify-center items-center hover:shadow-xl hover:cursor-pointer"
	on:click={() => goto(`/rate/${$page.params.class}/${subject}`)}
>
	<h1 class="text-6xl text-white">{subject}</h1>
</div>
