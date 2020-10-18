const db = require('../utils/DB.js');
const TableName = 'Tasks';

const create = task => db.createElement(TableName, task);

const getAll = boardId =>
  db.getAllElements(TableName).filter(el => el.boardId === boardId);

const get = (boardId, id) => {
  try {
    return getAll(boardId).find(el => el.id === id);
  } catch {
    throw new Error(`There are no task with id ${id}`);
  }
};

const update = (id, task) => db.updateElement(TableName, id, task);

const remove = id => db.removeElementById(TableName, id);

module.exports = { create, getAll, get, update, remove };
