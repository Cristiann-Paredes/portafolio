//IMPORTAR MONGOSE 
const mongoose = require('mongoose')




//const MONGODB_URI = 'mongodb+srv://byrontosh:sistemas@cluster0.6e8zntc.mongodb.net/test'




//CREAR UN METODO PARA HACER LA CONEXION
connection = async()=>{
    try {
        //INVOCAMOS EL METODO CONNECT
         await mongoose.connect(process.env.MONGODB_URI)
         //RESPUESTA DE LA PROMESA=="OK"
        console.log("Database is connected")
    } catch (error) {
        //RESPUESTA DE LA PROMESA=="ERROR"
        console.log(error);
    }
}

module.exports = connection