<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { colors } from '../../util/Color';

	export let subject: string;
	export let color: string;
</script>

<div
	class={`${
		colors.find((currentColor) => currentColor.name === color).css
	} shadow-l rounded-xl p-8 flex justify-center items-center hover:shadow-xl hover:cursor-pointer`}
	on:click={() => goto(`/rate/${$page.params.schoolClass}/${subject}`)}
>
	<h1 class="text-6xl text-white">{subject}</h1>
</div>
