const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);

const get = (boardId, id) => tasksRepo.get(boardId, id);

const create = task => tasksRepo.create(task);

const update = (id, task) => tasksRepo.update(id, task);

const remove = id => tasksRepo.remove(id);

module.exports = { create, getAll, get, update, remove };
