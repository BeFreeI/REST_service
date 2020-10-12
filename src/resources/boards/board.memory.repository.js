const db = require('../utils/DB.js');
const TableName = 'Boards';

const create = board => db.createElement(TableName, board);

const getAll = () => db.getAllElements(TableName);

const get = id => db.getElementById(TableName, id);

const update = (id, board) => db.updateElement(TableName, id, board);

const remove = id => {
  const badTasks = db.getAllElements('Tasks').filter(el => el.boardId === id);
  for (const el of badTasks) {
    db.removeElementById('Tasks', el.id);
  }
  db.removeElementById(TableName, id);
};

module.exports = { create, getAll, get, update, remove };
