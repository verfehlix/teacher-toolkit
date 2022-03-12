<script lang="ts">
	import { goto } from '$app/navigation';
	import { colors } from '../../util/Color';

	export let className: string;
	export let color: string;
</script>

<div
	class={`${
		colors.find((currentColor) => currentColor.name === color).css
	} shadow-l rounded-xl p-8 flex justify-center items-center hover:shadow-xl hover:cursor-pointer`}
	on:click={() => goto(`/rate/${className}`)}
>
	<h1 class="text-6xl text-white">{className}</h1>
</div>
