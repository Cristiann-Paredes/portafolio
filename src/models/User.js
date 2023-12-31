//IMPORTAR SEMA Y EL MODELO
const {Schema, model} = require('mongoose')
//IMPORT BCRYPT = PARA ENCRIPTAR CUANDO SE GUARDE
const bcrypt = require('bcryptjs')
const userSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password :{
        type:String,
        require:true
    }
},{
    timestamps:true
})

// Método para cifrar el password del usuario
userSchema.methods.encrypPassword = async (password)=>{
    //ESTABLECER LOS SALTOS PARA ENCRIPTAR EL PASSWORD
    const salt = await bcrypt.genSalt(10)
    //ENCRIPTAR EL PASSWORD
    const passwordEncryp = await bcrypt.hash(password,salt)
    //RETORNA EL PASSWORD ENCRIPTADO
    return passwordEncryp
}

// Método para verificar si el password ingresado es el mismo de la BDD
userSchema.methods.matchPassword = async function(password){
    //UTILIZAR EL METODO COMPARE
    const response = await bcrypt.compare(password,this.password)
    //RETORNA UNA RESPUESTA EN BOOLEANO
    return response
}


module.exports = model('user',userSchema)