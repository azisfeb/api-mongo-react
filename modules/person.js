const mongoose = require('mongoose')
const Schema = mongoose.Schema


//create geo schema
const GeoSchema = new Schema({
    type: {
        default: "Point",
        type: String
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

//create person schema
const personSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    rank: {
        type: String
    },
    age: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
})

const Person = mongoose.model('persons', personSchema)

module.exports = Person