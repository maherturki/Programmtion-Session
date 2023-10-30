

const express = require("express")

const router = express.Router()

const taskController = require("../controllers/task")
const auth = require("../middleware/auth")

router.get("/", auth.loggedMiddleware, auth.isAdmin ,taskController.fetchTasks) // middlware besh tet3ada aal 3 wel auth.isAdmin besh nekho el role pour simplifier e thing

router.post("/", auth.loggedMiddleware,taskController.addTask)

router.get(":id", auth.loggedMiddleware,taskController.getTaskById)

router.patch(":id", auth.loggedMiddleware,taskController.updateTasks)

router.delete(":id", auth.loggedMiddleware,taskController.deleteTask)

// ken man3mlsh req.send el postman yo93d ydour
module.exports = router