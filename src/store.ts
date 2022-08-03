import { writable } from "svelte/store";

export class TodoItem {
	constructor(public name: string, public completed: boolean) {}
}

export const items = writable([] as TodoItem[]);