const router = require('express-promise-router')();

const { 
    exampleWithDB,
    createTodo 
} = require('../controllers/users');

router.route('/')
    .get(exampleWithDB)
    .post(createTodo);

module.exports = router;