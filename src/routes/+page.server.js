import { todos } from './data.js';
import cds from '@sap/cds';

await cds.server({in_memory: true});
const srv = await cds.connect.to('BookshopService');
const {Books} = srv.entities("sap.capire.bookshop");

export async function load() {
	const todos = await srv.read(Books)
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
