const users = require('../../util/users');

const router = require('express').Router();

router.get('/', (req, res) => {
    let username = req.query.username;

    res.json(
        users.get(username)
    );
});

module.exports = router;
