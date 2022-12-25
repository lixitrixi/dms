const router = require('express').Router();

router.use('/register',
    require('./api/register')
);

router.use('/user',
    require('./api/user')
);

module.exports = router;
