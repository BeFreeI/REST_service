const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router
  .route('/')
  .get(async (req, res, next) => {
    const boards = boardsService.getAll();
    res.json(boards);
    next();
  })
  .post(async (req, res, next) => {
    const board = boardsService.create(new Board(req.body));
    res.json(Board.toResponse(board));
    next();
  });

router
  .route('/:boardId')
  .get(async (req, res, next) => {
    const board = boardsService.get(req.params.boardId);
    res.json(Board.toResponse(board));
    next();
  })
  .put(async (req, res, next) => {
    const board = boardsService.update(
      req.params.boardId,
      new Board({
        id: req.params.boardId,
        ...req.body
      })
    );
    res.json(Board.toResponse(board));
    next();
  })
  .delete(async (req, res, next) => {
    if (!boardsService.remove(req.params.boardId)) {
      res.status(404).end();
    }
    res.end();
    next();
  });

module.exports = router;
