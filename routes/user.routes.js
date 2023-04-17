const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
// router.get('/user/:nickname && /user/:password_', userController.getOneUserByAccount)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)





module.exports = router