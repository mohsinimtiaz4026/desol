const userRouter = require('./userRouter');
const Router = require('express').Router();

Router.use('/users',userRouter);


module.exports = Router;