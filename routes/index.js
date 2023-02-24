
import express from 'express'
import usersRouter from './users.js'
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sprint 1' });
});
app.use('/users', usersRouter);

export default router
