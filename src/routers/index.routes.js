
//importar routes de express
const {Router} = require('express')

//instancias routes
const router = Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

//importar la variable router
module.exports = router