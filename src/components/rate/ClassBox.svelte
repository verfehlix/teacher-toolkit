<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Color } from '../../util/Color';
	import { mapColorToCss } from '../../util/Color';

	export let className: string;
	export let color: Color;

	$: cssColorString = mapColorToCss(color);
</script>

<div
	class="bg-gradient-to-tl {cssColorString} shadow-l rounded-xl p-8 flex justify-center items-center hover:shadow-xl hover:cursor-pointer"
	on:click={() => goto(`/rate/${className}`)}
>
	<h1 class="text-6xl text-white">{className}</h1>
</div>
