const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router
  .route('/:boardId/tasks')
  .get(async (req, res, next) => {
    try {
      const tasks = await tasksService.getAll(req.params.boardId);
      res.status(200).json(tasks.map(Task.toResponse));
    } catch {
      res.status(404);
    }
    res.end();
    next();
  })
  .post(async (req, res, next) => {
    req.body.boardId = req.params.boardId;
    const task = await tasksService.create(new Task(req.body));
    res.json(Task.toResponse(task));
    res.end();
    next();
  });

router
  .route('/:boardId/tasks/:taskId')
  .get(async (req, res, next) => {
    try {
      const task = await tasksService.get(
        req.params.boardId,
        req.params.taskId
      );
      res.status(200).json(Task.toResponse(task));
    } catch {
      res.status(404);
    }
    res.end();
    next();
  })
  .put(async (req, res, next) => {
    req.body.boardId = req.params.boardId;
    const task = await tasksService.update(
      req.params.taskId,
      new Task({
        id: req.params.taskId,
        ...req.body
      })
    );
    res.json(Task.toResponse(task));
    next();
  })
  .delete(async (req, res, next) => {
    try {
      await tasksService.remove(req.params.taskId);
      res.status(204);
    } catch {
      res.status(404);
    }
    res.end();
    next();
  });

module.exports = router;
