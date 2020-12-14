const Task = require('../models/Task')

exports.getTaskById = (req, res, next, id) => {

    Task.findById(id).exec((err, cate) => {
        if(err){
            return res.status(400).json({ error: "Task not found in DB"})
        }
        req.task = cate;
        next();
    })

}

exports.createTask = (req, res) => {
    const task = new Task(req.body);
    task.save((err, task) => {
        if(err){
            return res.status(400).json({ error: err})
        }
        res.json({task});
    })
}

exports.getTask = (req, res) => {
    return res.json(req.task)
}

exports.getAllTask = (req, res) => {
    Task.find().exec((err, tasks) => {
        if(err){
            return res.status(400).json({ error: "No tasks found"})
        }
        res.json(tasks);
    })
}

exports.getAllTasksUser = (req, res) => {
    Task.find({user: req.params.userId}).exec((err, tasks) => {
        if(err){
            return res.status(400).json({ error: "No tasks found"})
        }
        res.json(tasks)
    })
}

exports.updateTask = (req, res) => {
    const task = req.task;
    task.name = req.body.name;

    task.save((err, updatedTask) => {
        if(err){
            return res.status(400).json({ error: "Can't update task"})
        }
        res.json(updatedTask)
    })
}
exports.deleteTask = (req, res) => {
    const task = req.task;

    task.remove((err, task) => {
        if(err){
            return res.status(400).json({ error: "Can't delete task"})
        }
        res.json({
            message: "Deleted",
            data: task
        })
    })
}