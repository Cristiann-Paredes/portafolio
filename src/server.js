//INPORTACION DE PATH
const express = require('express')
const { engine }  = require('express-handlebars')
const path = require('path');

// Inicializaciones
const app = express()

//VARIABLES DE CONFIGRACION
// Configuraciones 
app.set('port',process.env.port || 3000)
//DEFINE UNA VARIABLE 

app.set('views',path.join(__dirname, 'views'))


// Middlewares 
app.use(express.urlencoded({extended:false}))


// Variables globales


//ESTABLECER EL PATH DE LA CARPETA VIEWS

// Configuraciones 
app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))
app.set('view engine','.hbs')
// Rutas 

//PRIMERA RUTA

app.use(require('./routers/index.routes'))

// Archivos estáticos
//DEFINIR ARCHIVVOS ESTATICOS Y PUBLICOS
app.use(express.static(path.join(__dirname,'public')))

//EXPORTAR LA VVARIABLE APP
module.exports = app