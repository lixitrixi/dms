const users = require('../../modules/users');
const router = require('express').Router();

router.get('/', (req, res) => {
    let name = req.query.name;
    let usr = users.get(name);

    if (!usr) {
        res.status(404).send("User not registered");
    }

    res.json(usr);
});

module.exports = router;
