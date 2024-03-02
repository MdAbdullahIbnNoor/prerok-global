"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createUser, getUserByEmail, updateUser, updateRole, getAllUser } = require('../controlers/user.controlers');
const { verifyUser } = require('../middlewares/authMiddleware');
const router = require('express').Router();
//route for get all user
router.get('/get-all-user', getAllUser);
//route for get user by his email
router.get('/get-user/:email', getUserByEmail);
//route for create a new user
router.post('/add-user', createUser);
//route for update a existing user
router.put('/update-user/:email', updateUser);
//route for update role of existing user
router.patch('/update-role/:email', updateRole);
module.exports = router;
