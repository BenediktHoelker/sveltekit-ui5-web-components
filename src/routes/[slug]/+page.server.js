import { error } from '@sveltejs/kit';
import { todos } from '../data.js';

export function load({ params }) {
	const todo = todos.find((todo) => todo.ID === params.slug);

	if (!todo) throw error(404);

	return {
		todo
	};
}
