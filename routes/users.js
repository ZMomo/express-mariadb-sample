const router = require('express-promise-router')();

const { example, example2 } = require('../controllers/users');

router.route('/')
    .get(example, example2);

module.exports = router;