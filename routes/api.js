const express = require('express')
const router = express.Router()
const { insertPerson, deletePerson, getAllPerson, updatePerson, getPersonById } = require('../controllers/personController')

router.get('/person', getAllPerson)
router.get('/person/:id', getPersonById)
router.post('/person', insertPerson)
router.delete('/person/:id', deletePerson)
router.put('/person/:id', updatePerson)

module.exports = router