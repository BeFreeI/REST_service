const db = {
  Users: [],
  Boards: [],
  Tasks: []
};

const getAllElements = tableName => {
  return db[tableName];
};

const getElementById = (tableName, id) => {
  return db[tableName].find(el => el.id === id);
};

const createElement = (tableName, el) => {
  db[tableName].push(el);
  return el;
};

const updateElement = (tableName, id, el) => {
  db[tableName][db[tableName].findIndex(element => element.id === id)] = el;
  return el;
};

const removeElementById = (tableName, id) => {
  const newTable = db[tableName].filter(el => el.id !== id);
  const flag = newTable.length === db[tableName].length;
  db[tableName] = db[tableName].filter(el => el.id !== id);
  return !flag;
};

module.exports = {
  getAllElements,
  getElementById,
  createElement,
  updateElement,
  removeElementById
};
