<script lang="ts">
	import type { ColorName } from '../../util/Color';
	import { colors } from '../../util/Color';

	export let colorName: ColorName;
	export let onClick: () => void = () => {};
</script>

<div
	class={`${colors[colorName].css} shadow-l rounded-xl p-8 flex justify-center items-center hover:shadow-xl hover:cursor-pointer`}
	on:click={onClick}
>
	<slot />
</div>
