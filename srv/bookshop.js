import cds from '@sap/cds'

class BookshopService extends cds.ApplicationService {
	/** register custom handlers */
	init() {
		const { Books } = this.entities;

		this.on('READ', Books, async function (req) {
            const user = req.user;
			const books = await cds.read(Books);
			return books;
		});

        return super.init()
	}
}

export default BookshopService