const express = require('express')
const router = express.Router()
const { insertPerson, deletePerson, getAllPerson, updatePerson } = require('../controllers/personController')

router.get('/person', getAllPerson)
router.post('/person', insertPerson)
router.delete('/person/:id', deletePerson)
router.put('/person/:id', updatePerson)

module.exports = router