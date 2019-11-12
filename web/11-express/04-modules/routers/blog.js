
const express = require('express')
const router = express.Router()



router.get('/', (req, res) => res.send('get blog data ...'))
router.post('/', (req, res) => res.send('post blog data ...'))
router.put('/', (req, res) => res.send('put blog data ...'))
router.delete('/', (req, res) => res.send('delete blog data ...'))


module.exports = router