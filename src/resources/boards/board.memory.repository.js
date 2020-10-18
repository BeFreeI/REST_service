const db = require('../utils/DB.js');
const TableName = 'Boards';

const create = board => db.createElement(TableName, board);

const getAll = () => db.getAllElements(TableName);

const get = id => db.getElementById(TableName, id);

const update = (id, board) => db.updateElement(TableName, id, board);

const remove = id => {
  try {
    const tasks = db.getAllElements('Tasks');
    for (const el of tasks.filter(entity => entity.boardId === id)) {
      db.removeElementById('Tasks', el.id);
    }
    db.removeElementById(TableName, id);
  } catch {
    db.removeElementById(TableName, id);
  }
};

module.exports = { create, getAll, get, update, remove };
