const mongoose = require('mongoose')
const Schema = mongoose.Schema

const drinkSchema = new Schema({
    name:String,
    alcohols:[String],
    prepTime: Number,
    glassType:String,
    iceCube:String,
    steps:String,
    mixers: String,
    garnishes: String,
    prepTime:Number,
    difficulty:{type:String, enum:[1, 2, 3, 4, 5]},
    mixologist: String
},{
    timestamps: true
})



module.exports = mongoose.model('Drink', drinkSchema)