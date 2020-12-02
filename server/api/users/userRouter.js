const { Router } = require('express');

const router = require('express').Router();
const {getUsers, createUsers, login} = require('./userController');
router.get('/',getUsers);
router.post('/login',login);
router.post('/user',createUsers);

module.exports = router;