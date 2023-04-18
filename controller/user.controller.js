const db = require('../db')
class UserController {
    async createUser(req, res) {
        const { email, nickname, phone, password_, name_, surname, isadmin } = req.body
        const newPerson = await db.query('INSERT INTO persone (email, nickname, phone, password_, name_, surname, isadmin) values ($1,$2,$3,$4,$5,$6,$7) RETURNING *', 
        [email, nickname, phone, password_, name_, surname, isadmin])
        res.json(newPerson.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM persone')
        res.json(users.rows)
    }
    // async getOneUser(req, res) {
    //     const id = req.params.id
    //     const user = await db.query('SELECT * FROM persone where id = $1', [id])
    //     res.json(user.rows[0])
    // }
    async getOneUserByAccount(req, res){
            const nickname = req.params.nickname
            const user = await db.query('SELECT * FROM persone where nickname = $1', [nickname])
            res.json(user.rows[0])
        }
    async updateUser(req, res) {
        const {email, nickname, phone, password_, name_, surname, id } = req.body
        const user = await db.query('UPDATE persone set email = $1, nickname = $2, phone = $3, password_ = $4, name_ = $5, surname = $6, isAdmin=$7 id = $8 RETURNING *',
        [email, nickname, phone, password_, name_, surname, id])
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM persone where id = $1', [id])
        res.json(user.rows[0])
    }
}
module.exports = new UserController()