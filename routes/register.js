const express = require('express');
const crypto = require('crypto');
const users = require('../util/users');

const router = express.Router()

const REQUIRED = new Set(
    ['name', 'publickey', 'secret', 'hash2', 'salt']
);

/**
 * Validate a user registration submission.
 * @param {*} usr the user object to check
 * @returns whether the object passes all checks
 */
function validate(usr) {
    if (new Set(Object.values(usr)) != REQUIRED) {
        return "Missing required registration fields!"
    }

    if (!Object.values(yourTestObject).every(Boolean)) {
        return "Some registration fields are empty!";
    }

    // can add more checks

    return;
}

router.post('/', (req, res) => {
    let usr = req.body;

    console.log("new user");
    console.log(usr);
    
    let err = validate(usr);
    if (err) {
        res.status(400).send(err);
    }

    if (users.exists(usr.name)) {
        res.status(409).send("Username already registered!");
        return;
    }

    users.add(usr.name, {
        name: usr.name,
        publickey: usrs.publickey,
        secret: usr.secret,
        hash2: usr.hash2,
        salt: usr.salt
    });
});

module.exports = router;
