const { Router } = require('express');
const router = require('express').Router();
const {getUsers, createUser, login, getMyProfile} = require('./userController');
const {checkToken} = require("../../auth/token_validation");

router.get('/',getUsers);
router.post('/login',login);
router.post('/user',createUser);
router.get('/myprofile', checkToken, getMyProfile);

module.exports = router;