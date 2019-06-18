const express = require ('express')

const app = express()
//


// middleWare

app.use( time = (req,res,next) => {
    let requestTime = new Date()
     let tab = requestTime.toLocaleTimeString().split(':')
    
   if ( 8 < tab[0] && tab[0] < 18 ) res.send("it's to late babe -_- ") 
   else next()
}
)
// les routes 

app.get('/:page', (req, res )=> {
    console.log(req.params.page)
    res.sendFile(__dirname + '/public/'+req.params.page+'.html')
})



// Creation de Serveur on port 3000

app.listen(3000, (err) =>{
    if(err) console.log("Server is not running")
    else console.log("Serveur is running in port 3000")
})