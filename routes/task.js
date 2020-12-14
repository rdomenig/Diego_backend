const express = require('express');
const router = express.Router();

const {getTaskById, createTask, getTask, getAllTask, updateTask, deleteTask, getAllTasksUser} = require('../controllers/task')
const {isSignedIn, isAuthenticated} = require('../controllers/auth')
const {getUserById} = require('../controllers/user')

// task
router.param('userId', getUserById);
router.param('taskId', getTaskById);

// actual routes
router.post('/task/create', createTask)

router.get("/task/:taskId", getTask)
router.get("/tasks", getAllTask)
router.get("/tasks/user/:userId", isSignedIn, isAuthenticated, getAllTasksUser)

router.put('/task/:taskId/:userId', isSignedIn, isAuthenticated, updateTask)
router.delete('/task/:taskId/:userId', isSignedIn, isAuthenticated, deleteTask)

module.exports = router;