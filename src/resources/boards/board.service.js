const boardsRepo = require('./board.memory.repository');

const create = boards => boardsRepo.create(boards);

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const update = (id, board) => boardsRepo.update(id, board);

const remove = id => boardsRepo.remove(id);

module.exports = { create, getAll, get, update, remove };
