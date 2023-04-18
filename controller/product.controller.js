class ProductController {
    async createProduct(req, res) {
        const { title, productsimage, price} = req.body
        const newProduct = await db.query('INSERT INTO product (title, productsimage, price) values ($1,$2,$3) RETURNING *', 
        [title, productsimage, price])
        res.json(newProduct.rows[0])
    }
    async getProducts(req, res) {
        const products = await db.query('SELECT * FROM product')
        res.json(products.rows)
    }
    async getOneProduct(req, res) {
        const id = req.params.id
        const product = await db.query('SELECT * FROM product where id = $1', [id])
        res.json(product.rows[0])
    }
    async updateProduct(req, res) {
        const { title, productsimage, price, id } = req.body
        const product = await db.query('UPDATE product set title = $1, productsimage = $2, price = $3, id = $4 RETURNING *',
        [title, productsimage, price, id])
        res.json(product.rows[0])
    }
    async deleteProduct(req, res) {
        const id = req.params.id
        const product = await db.query('DELETE FROM product where id = $1', [id])
        res.json(product.rows[0])
    }
}
module.exports = new ProductController()
