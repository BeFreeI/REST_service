const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const users = await usersService.getAll();
      res.json(users.map(User.toResponse));
    } catch {
      res.json([]);
    }
  })
  .post(async (req, res) => {
    const user = await usersService.create(new User(req.body));
    res.json(User.toResponse(user));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    res.json(await usersService.get(req.params.id));
  })
  .put(async (req, res) => {
    const user = await usersService.update(
      req.params.id,
      new User({
        id: req.params.id,
        ...req.body
      })
    );
    res.json(User.toResponse(user));
  })
  .delete(async (req, res) => {
    try {
      await usersService.remove(req.params.id);
      res.status(204);
    } catch {
      res.status(404);
    }
    res.end();
  });

module.exports = router;
