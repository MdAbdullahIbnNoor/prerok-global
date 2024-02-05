const { createUser, getUserByEmail, updateUser } = require('../controlers/user.controlers');
const router = require('express').Router();

//route for get user by his email
router.get('/get-user/:email', getUserByEmail)

//route for create a new user
router.post('/add-user', createUser);

//route for update a existing user
router.put('/update-user/:email', updateUser);

module.exports = router;