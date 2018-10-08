'use strict'
const Person = require('../modules/person')
const _ = require('lodash')

module.exports = {
    insertPerson: (req, res) => {
        let newPerson = new Person(req.body)
        newPerson
        .save()
        .then(() => {
            res.send({
                type: "POST",
                state: "success"
            })
        })
        .catch((err) => {
            res.send({ 
                error: err.errors.name.message,
                status: "failed"
            })
        })
    },
    deletePerson: (req, res) => {
        Person
        .deleteOne({ _id: req.params.id })
        .then(() => {
            res.send({
                type: "DELETE",
                status: "success"
            })
        })
    },
    getAllPerson: (req, res) => {
        
        if(_.isEmpty(req.query)){
            Person
            .find()
            .then((person) => {
                res.send(person)
            })
            .catch((e) => {
                res.send(e)
            })
        } else {
            Person.aggregate([
                {
                    $geoNear: {
                        near: { type: "Point", coordinates: [parseFloat(req.query.long), parseFloat(req.query.lat)]},
                        distanceField: "dist.calculated",
                        maxDistance: 1000000, 
                        spherical: true
                    }
                }]
            ).then((person) => {
                res.send(person)
            })
            .catch(e => {
                res.send(e)
            })
        }
    },
    updatePerson: (req, res) => {
        Person
        .updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.send({
                type: "PUT",
                status: "success"
            })
        })
        .catch((e) => {
            res.send(e)
        })
    },
    getPersonById: (req, res) => {
        Person
        .findOne({ _id: req.params.id })
        .then((data) => {
            res.send(data)
        })
        .catch((e) => {
            res.send(e)
        })
    }
}