require('dotenv').config() //for env file (help in hiding senstive  info)
const express = require ('express'); // express import
const app  = express() //app variable
const  port = 4000; // port number


//request to run (cb function, req&res is fix)
app.get('/',  (req, res)=>{
    res.send('Hello World')
})

app.get('/twitter', (req, res)=>{
    res.send('viveksharmadotcom')
})
app.get('/login', (req, res)=>{
    res.send('<h1>Please login </h1>')
})
app.get('/youtube', (req, res)=>{
    res.send('<a href="https://www.youtube.com" target="_blank">Open YouTube</a>')
})


//THIS IS SIMPLE AND NOT INFO SENSTIVE WAY
// app.listen(port, ()=>{
//     console.log(`Example app listen on port ${port}`);
    
// })

//INFO SENSTIVE WAY
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listen on port ${port}`);
    
})

