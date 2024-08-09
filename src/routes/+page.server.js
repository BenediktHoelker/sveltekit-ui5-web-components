import { todos } from './data.js';

// const srv = await cds.connect.to('BookshopService');
// const { Books } = srv.entities('sap.capire.bookshop');

export async function load({ locals }) {
	// const todos = await srv.read(Books);
	const user = locals.user;
	const token = locals.token;

	const url = 'http://localhost:4004/odata/v4/bookshop/Books';
	const response = await fetch(url, {headers: {Authorization: token}})
	
	const data = await response.json()
	const todos = data.value;
	return {
		todos
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const object = { ID: data.get('ID'), title: data.get('title') };
		// await UPSERT(object).into(Books);
	}
};
