 const express = require("express")
const app = express()
//app.use((req,res) => {
//    res.json({message: "Votre requete a bien ete recu"})
//})

// app.use((req, res, next) => {
//     console.log("Requete recue ! ")
//     next()
// })

// app.use((req, res, next) => {
//     res.status(201)
//     next()
// })

// app.use((req, res, next) => {
//     res.json({message: "Votre requete a bien ete recue! "})
//     next()
// })

// app.use((req, res, next) => {
//     console.log("Reponse envoyee avec sucess ! ")

// })


// app.use((req, res, next))

// app.use((req, res, next) => {
//     res.setHeader("Access-control-Allow-origin","*")
//     res.setHeader(
//         "Acess-Control-Allow-Headers",
//         "Origin, x-Requested-with, Content, Accept, Content-Type, Authorizaton"
//     )
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//     )
//     next()
// })

// app.use(express.json()) //

// app.get("/api/tasks", (req, res, next) => {
//     const todos = [
//         {
//             _id : "1",
//             title: "learn js",
//             duration: "30",
//         },
//         {
//             _id : "2",
//             title: "learn nodejs",
//             duration: "30",
//         },
//         {
//             _id : "3",
//             title: "learn react",
//             duration: "30",
//         },
        
//     ]
//     res.status(200).json(todos)
// })

// app.get("/api/tasks/:id",(req, res) => {
//     console.log(req.params.id)
//     res.send(req.params.id)
// })
// app.patch("/api/tasks/:id",(req, res) => { //les champs (des données) à modifier et put all the data even eli not modified
//     console.log(req.body)
//     res.send(req.params.id)
// })

// app.delete("/api/tasks/:id",(req, res) => {
//     console.log(req.params.id)
//     res.send(req.body) // fama ORM w fel mongo fama ODM
// })


// app.post("/api/tasks/",(req, res) => {
//     console.log(req.body)
//     res.send(req.body)
// })




module.exports = app