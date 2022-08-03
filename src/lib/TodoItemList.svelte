<script lang="ts">
	import { items } from "../store";
	import TodoItem from "./TodoItem.svelte";
</script>

<div class="container item-list">
	{#each $items as item}
		<TodoItem task={item} />
	{/each}
</div>