<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { colors, type ColorName } from '../../util/Color';

	export let subject: string;
	export let colorName: ColorName;
</script>

<div
	class={`${colors[colorName].css} shadow-l rounded-xl p-8 flex justify-center items-center hover:shadow-xl hover:cursor-pointer`}
	on:click={() => goto(`/rate/${$page.params.schoolClass}/${subject}`)}
>
	<h1 class="text-6xl text-white">{subject}</h1>
</div>
