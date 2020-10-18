const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const boards = await boardsService.getAll();
      res.status(200).json(boards.map(Board.toResponse));
    } catch {
      res.status(400);
    }
    res.end();
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
    try {
      res
        .status(200)
        .json(Board.toResponse(await boardsService.get(req.params.boardId)));
    } catch {
      res.status(404);
    }
    res.end();
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
  .delete((req, res, next) => {
    try {
      boardsService.remove(req.params.boardId);
      res.status(204);
    } catch {
      res.status(404);
    }
    res.end();
    next();
  });

module.exports = router;
