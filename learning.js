const express = require('express');

const app = express();

app.use(express.json());

const students = [];
const classroom = [];

app.get("/student", (res,req)=>
{   students.push(req.body)
    return res.js({Sucess : true})
})

app.listen(3001);