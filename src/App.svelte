<script lang="ts">
	import NewItemForm from "./lib/NewItemForm.svelte";
	import TodoItemList from "./lib/TodoItemList.svelte";
</script>

<div class="container text-center pt-5 flex align-content-center flex-wrap">
	<h1>Svelte Todo App</h1>
	<NewItemForm />
	<TodoItemList />
</div>
