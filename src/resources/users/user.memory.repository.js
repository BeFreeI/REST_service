const db = require('../utils/DB.js');
const TableName = 'Users';

const create = user => db.createElement(TableName, user);

const getAll = () => db.getAllElements(TableName);

const get = id => db.getElementById(TableName, id);

const update = (id, user) => db.updateElement(TableName, id, user);

const remove = id => db.removeElementById(TableName, id);

// const getAll = async () => {
//   return [];
// };

module.exports = { create, getAll, get, update, remove };
