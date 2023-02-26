
import usersRouter from './users.js'

import express from 'express'
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sprint 1' });
});

router.use('/users', usersRouter);

export default router
