const users = require('../../modules/users');
const router = require('express').Router();

router.post('/', (req, res) => {
    let cred = req.body;

    if (!users.exists(usr.name)) {
        res.status(404).send("Username not registered!");
        return;
    }
});

module.exports = router;
