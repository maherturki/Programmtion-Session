const mongoose = require("mongoose") // local = compass

const taskSchema = mongoose.Schema({
    title : { type: String, required: true },
    duration : { type: String, required: true },
    description: { type: String, required: false }, //par défaut required false
})

module.exports = mongoose.model("Task", taskSchema)