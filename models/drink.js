const mongoose = require('mongoose')
const Schema = mongoose.Schema

const drinkSchema = new Schema({
    name:String,
    alcohols:[String],
    glassType:String,
    iceType:String,
    instructions:String,
    ingredients:[String],
    prepTime:Number,
    difficulty:{type:String, enum:['Beginner', 'Medium', 'Advanced']},
})

module.exports = mongoose.model('Drink', drinkSchema)