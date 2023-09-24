const express = require('express')

const {home,createUser,getUsers,deleteUser,editUser} = require('../controllers/userControllers.js');

const router = express.Router();

router.get('/',home);
router.get('/getusers',getUsers);
router.post('/createUser',createUser);
router.delete('/deleteUser/:id',deleteUser)
router.put('/editUser/:id',editUser)


module.exports = router;

