const express = require('express')
const router = express.Router()
const {getUser, setUsers, updateUser, deleteUser} = require('../controllers/userController')

router.get('/', getUser);
router.post('/create', setUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser)

module.exports = router;