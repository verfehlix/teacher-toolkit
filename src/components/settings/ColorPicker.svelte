<script lang="ts">
	import { type ColorName, colors } from '../../util/Color';

	export let colorName: ColorName;
	export let selected: boolean;
	export let onClick: () => void;
</script>

{#if selected}
	<div
		class={`${colors[colorName].css} mt-1 w-4 h-4 rounded-full cursor-pointer border-2 border-slate-500`}
		on:click={onClick}
	/>
{:else}
	<div
		class={`${colors[colorName].css} mt-1 w-4 h-4 rounded-full cursor-pointer`}
		on:click={onClick}
	/>
{/if}
