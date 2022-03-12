<script lang="ts">
	import type { Color } from '../../util/Color';
	import { colors } from '../../util/Color';

	export let color: Color;
	export let onClick: () => void = () => {};
</script>

<div
	class={`${
		colors.find((currentColor) => currentColor.name === color.name).css
	} shadow-l rounded-xl p-8 flex justify-center items-center hover:shadow-xl hover:cursor-pointer`}
	on:click={onClick}
>
	<slot />
</div>
