const db = {
  Users: [],
  Boards: [],
  Tasks: []
};

const getAllElements = tableName => {
  if (!db[tableName].length) {
    throw new Error(`There are no elements in ${tableName}`);
  }
  return db[tableName];
};

const getElementById = (tableName, id) => {
  const entity = db[tableName].find(el => el.id === id);
  if (!entity) {
    throw new Error(`No ${tableName} with id "${id}"`);
  }
  return entity;
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
  if (newTable.length === db[tableName].length) {
    throw new Error(`No ${tableName} with this parametrs`);
  }
  db[tableName] = db[tableName].filter(el => el.id !== id);
};

module.exports = {
  getAllElements,
  getElementById,
  createElement,
  updateElement,
  removeElementById
};
