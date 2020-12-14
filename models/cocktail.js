const mongoose = require('mongoose')
const Schema = mongoose.Schema

const instructionSchema = new Schema({
    glassType: {type:String, enum:['rocks','highball','martini','margarita','hurricane','shot']},
    prepTime: Number,
    difficulty: {type: Number, enum:[1, 2, 3, 4, 5]},
    steps: String,
    iceCube: {type:String, enums:['cubed','large sphere','crushed','large cube']},
},{
    timestamps:true
})


const cocktailSchema = new Schema({
    name: String,
    mixers:{type:String},
    garnishes: {type:String},
    glassType: {type:String, enum:['rocks','highball','martini','margarita','hurricane','shot']},
    prepTime: Number,
    difficulty: {type: Number, enum:[1, 2, 3, 4, 5]},
    steps: String,
    iceCube: {type:String, enums:['cubed','large sphere','crushed','large cube']},
    mixologist: {type:Schema.Types.ObjectId, ref: 'User'},
    // favoritedBy:[{type:Schema.Types.ObjectId, ref:'User'}],
    alcohols: [{type: Schema.Types.ObjectId, ref: 'Alcohol'}],
},{
    timestamps: true
})

module.exports = mongoose.model('Cocktail', cocktailSchema)