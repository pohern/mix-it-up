const mongoose = require('mongoose')
const Schema = mongoose.Schema

const instructionSchema = new Schema({
    alcohols:[{type:Schema.Types.ObjectId, ref: 'Alcohol'}],
    glassType: {type:String, enum:['rocks','highball','martini','margarita','hurricane','shot']},
    prepTime: Number,
    difficulty: Number,
    steps: String,
    iceCube: {type:String, enums:['cubed','large sphere','crushed','large cube']},
},{
    timestamps:true
})

const ingredientsSchema = new Schema({
    mixers:[String],
    garnishes:[String],
})

const cocktailSchema = new Schema({
    name: String,
    ingredients:[ingredientsSchema],
    instructions: [instructionSchema],
    mixologist: {type:Schema.Types.ObjectId, ref: 'User'},
    // favoritedBy:[{type:Schema.Types.ObjectId, ref:'User'}],
    alcohols: [{type: Schema.Types.ObjectId, ref: 'Alcohol'}],
},{
    timestamps: true
})

module.exports = mongoose.model('Cocktail', cocktailSchema)