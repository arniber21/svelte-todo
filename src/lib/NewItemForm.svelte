<script lang="ts">
	let taskName: string = '';
	import { items, TodoItem } from "../store";

	const handleSubmit = () => {
		items.update(items => [...items, new TodoItem(taskName, false)]);
		taskName = '';
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="row justify-content-center">
		<div class="col-auto">
			<label class="col-form-label">Task Name: </label>
		</div>
		<div class="col-auto">
			<input type="text" class="form-control" bind:value={taskName}>
		</div>
		<div class="col-auto">
			<input type="submit" value="Add Item" class="btn btn-outline-primary">
		</div>
	</div>
</form>