const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/', usersController.getSingle); 

//3 more endpoints
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser); //could also use patch
router.delete('/id', usersController.deleteUser);


module.exports = router;