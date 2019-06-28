const express = require('express')

const app = new express();

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen((3000), () => {
    console.log(`Server started on port:3000`);
});

