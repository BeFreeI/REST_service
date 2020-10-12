const uuid = require('uuid');

class Column {
  constructor({ id = uuid(), title = 'title', order = 0 }) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

class Board {
  constructor({ id = uuid(), title = 'title', columns = [] }) {
    this.id = id;
    this.title = title;
    this.columns = [];
    for (const el of columns) {
      this.columns.push(new Column(el));
    }
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
