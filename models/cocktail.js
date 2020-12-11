const mongoose = require('mongoose')
const Schema = mongoose.Schema

const instructionSchema = new Schema({
    glassType: {type:String, enum:['rocks','highball','martini','margarita','hurricane','shot']},
    prepTime: Number,
    difficulty: Number,
    steps: String,
    iceCube: {type:String, enums:['cubed','large sphere','crushed','large cube']},
},{
    timestamps:true
})

const cocktailSchema = new Schema({
    name: String,
    alcohols: [{type: Schema.Types.ObjectId, ref: 'Alcohol'}],
    ingredients:[String],
    instructions: [instructionSchema],
    mixologist: {type:Schema.Types.ObjectId, ref: 'User'},
    favoritedBy:[{type:Schema.Types.ObjectId, ref:'User'}]
},{
    timestamps: true
})

module.exports = mongoose.model('Cocktail', cocktailSchema)