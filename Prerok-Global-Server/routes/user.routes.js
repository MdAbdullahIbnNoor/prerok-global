const { createUser, getUserByEmail, updateUser } = require('../controlers/user.controlers');
const router = require('express').Router();

router.get('/api/user/get-user/:email', getUserByEmail)

router.post('/api/users/add-user', createUser);

router.put('/api/users/update-user/:email', updateUser);

module.exports = router;