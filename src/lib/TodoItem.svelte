<script lang="ts">
	import { items, TodoItem } from "../store";

	export let task: TodoItem;
	const markItemAsComplete = () => {
		task.completed = true;
	}

	const deleteItem = () => {
		items.update(items => items.filter(item => item.name !== task.name));
	}
</script>

<div class="card text-center m-3">
	<div class="card-body d-flex">
		<h5 class="card-title d-inline flex-grow-1">
			{task.name}
			{#if task.completed}
				<span class="badge bg-success">Item completed!</span>
			{/if}
		</h5>
		{#if !task.completed}
			<button class="btn btn-primary mx-1" on:click={markItemAsComplete}>Mark as Complete</button>
		{/if}
		<button class="btn btn-outline-danger mx-1" on:click={deleteItem}>Delete Item</button>
	</div>
</div>