import { todos } from './data.js';
import cds from '@sap/cds';

const srv = await cds.connect.to('BookshopService');
const { Books } = srv.entities('sap.capire.bookshop');

export async function load() {
	const todos = await srv.read(Books);
	return {
		todos
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const object = { ID: data.get("ID"), title: data.get("title") };
		await UPSERT(object).into(Books);
	}
};
