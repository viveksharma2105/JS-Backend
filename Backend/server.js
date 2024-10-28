import express from 'express';//by this it will not work untill we cannot give package.json to ("type" :"module")
const app = express();
const port = process.env.PORT || 3000;

app.get('/',  (req, res)=>{
    res.send("Ready to send")
})

app.get('/jokes', (req,res)=>{
    const jokes =  [
        {
            id: 1,
            title: 'first joke',
            content:'nothing ',
        },
        {
            id: 2,
            title: 'second joke',
            content:'nothing ',
        },
        {
            id: 3,
            title: 'third joke',
            content:'nothing ',
        },
        {
            id: 4,
            title: 'forth joke',
            content:'nothing ',
        },
        {
            id: 5,
            title: 'fifth joke',
            content:'nothing ',
        },
    ];
    res.send(jokes);
});

app.listen(port,()=>{
    console.log(`server start at PORT${port}`);
    
})