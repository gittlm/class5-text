
const express = require('express')
const router = express.Router()



router.get('/', (req, res) => res.send('get user data ...'))
router.post('/', (req, res) => res.send('post user data ...'))
router.put('/', (req, res) => res.send('put user data ...'))
router.delete('/', (req, res) => res.send('delete user data ...'))


module.exports = router