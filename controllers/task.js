
const Task = require("../models/task")

const addTask = (req, res) => {
    const task = new Task(req.body) // task : objet w Task c'est nom du Model
    console.log(req.body)
    // res.send(req.body)
    task.save().then(() => {
      res.status(201).json({
        model: task,
        message: "Objet créé ! ",
      })
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message, // celui qui va utilisé l'application we can not control the error message bel anglais najmoush nbaldouh
        message: "Données invalides", // try mathaln faskh title fel postman taw yatl3lk
      })
     })
   }

const fetchTasks = (req, res) => {
  Task.find()
    .then((tasks) => {
      res.status(200).json(
        { model: tasks, message: "success"})
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      message: "probleme d'extraction",
      })
    })
}
const updateTasks = ( req, res) => { 

  Task.findOneAndUpdate({ _id: req.params.id }, //FindOneAndUpdate traj3 el objet 
    req.body, { new: true })
    .then((task) => {
      if (!task) {
        res.status(404).json({
          message: "Objet non trouvé",
        })
      } else {
        res.status(200).json({
          model: task,
          message: "Objet modifié",
        })
      }})
      .catch((error) => {
        res.status(500).json({
          error: error.message,
        message: "probleme d'extraction",
        })
      })
    }


const getTaskById = (req, res) => {
      //updateOne tarj3 haja okhra pas de sens c pas la peine de comprendre
     Task.findOne({ _id: req.params.id })//FindOneAndUpdate traj3 el objet 
       .then((task) => {
         if (!task) {
           res.status(404).json({
             message: "Objet non trouvé",
           })
         } else {
           res.status(200).json({
             model: task,
             message: "Objet trouvé",
           })
         }})
         .catch((error) => {
           res.status(500).json({
             error: error.message,
           message: "problem d'extraction",
           })
         })
        }

const deleteTask = (req, res) => {
  Task.deleteOne({ _id: req.params.id })
  .then(() => res.status(200).json({ message: "Objet supprimé ! " }))
  .catch((error) => res.status(400).json({ error: error.message }))
}

module.exports = {
    fetchTasks,
    addTask,
    updateTasks,
    getTaskById,
    deleteTask
}