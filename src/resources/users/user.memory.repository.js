const db = require('../utils/DB.js');
const TableName = 'Users';

const create = user => db.createElement(TableName, user);

const getAll = () => db.getAllElements(TableName);

const get = id => db.getElementById(TableName, id);

const update = (id, user) => db.updateElement(TableName, id, user);

const remove = id => {
  let tasks;
  try {
    tasks = db.getAllElements('Tasks');
    tasks.filter(el => el.userId === id).map(el => (el.userId = null));
    db.removeElementById(TableName, id);
  } catch {
    db.removeElementById(TableName, id);
  }
};

module.exports = { create, getAll, get, update, remove };
