//importamos el schema y el model
const {Schema, model} = require('mongoose')

//CREA UN NUEVO ESQUEMA --portfolioSchema
const portfolioSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    }
},{
    timestamps:true
})

//EXPORTAR EL MODELO
module.exports = model('portfolio',portfolioSchema)