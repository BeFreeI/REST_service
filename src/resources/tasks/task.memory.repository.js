const db = require('../utils/DB.js');
const TableName = 'Tasks';

const create = task => db.createElement(TableName, task);

const getAll = boardId =>
  db.getAllElements(TableName).filter(el => el.boardId === boardId);

const get = (boardId, id) => getAll(boardId).find(el => el.id === id);

const update = (id, task) => db.updateElement(TableName, id, task);

const remove = id => db.removeElementById(TableName, id);

// const getAll = async () => {
//   return [];
// };

module.exports = { create, getAll, get, update, remove };
