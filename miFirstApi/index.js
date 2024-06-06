const express = require('express')

const app = express(); //llama a express como funcion
const port = 3006
const host = "localhost"

app.get('/courses/aws',(req,res) => {
    res.send({
        "instructor": "Alejandro LLanganate",
        "numberOfStudents":50,
        "teachingAsistant":"Anahi Vasquez"
    })
})

app.listen(port,() => console.log('Server is running in port: '))