const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router
  .route('/:boardId/tasks')
  .get(async (req, res, next) => {
    const tasks = tasksService.getAll(req.params.boardId);
    res.json(tasks);
    next();
  })
  .post(async (req, res, next) => {
    req.body.boardId = req.params.boardId;
    const task = tasksService.create(new Task(req.body));
    res.json(task);
    next();
  });

router
  .route('/:boardId/tasks/:taskId')
  .get(async (req, res, next) => {
    const task = tasksService.get(req.params.boardId, req.params.taskId);
    res.json(task);
    next();
  })
  .put(async (req, res, next) => {
    req.body.boardId = req.params.boardId;
    const task = tasksService.update(
      req.params.taskId,
      new Task({
        id: req.params.taskId,
        ...req.body
      })
    );
    res.json(task);
    next();
  })
  .delete(async (req, res, next) => {
    if (tasksService.remove(req.params.taskId)) {
      res.status(204).send(null);
    }
    res.status(200).end();
    next();
  });

module.exports = router;
