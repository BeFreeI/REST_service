const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
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
    const user = await usersService.remove(req.params.id);
    if (!user) {
      res.send(null);
    } else {
      res.body = User.toResponse(user);
    }
    res.end();
  });

module.exports = router;
