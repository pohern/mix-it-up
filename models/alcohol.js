const mongoose = require('mongoose')
const Schema = mongoose.Schema

const alcoholSchema = new Schema({
    name: String,
    type: {type:String, enum:['Whiskey','Vodka','Bourbon','Gin','Tequila','Rum']},
},{
    timestamps:true
})

module.exports = mongoose.model('Alcohol', alcoholSchema)