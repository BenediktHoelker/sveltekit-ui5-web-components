import { todos } from './data.js';

export function load() {
	return {
		todos
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		console.log(data);
	}
};
