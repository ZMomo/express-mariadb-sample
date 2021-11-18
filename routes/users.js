const router = require('express-promise-router')();

const { exampleWithDB } = require('../controllers/users');

router.route('/')
    .get(exampleWithDB);

module.exports = router;