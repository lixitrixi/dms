const users = require('../../modules/users');
const router = require('express').Router();

const REQUIRED = new Set(
    ['name', 'pubkey', 'secret', 'pwdhash', 'salt']
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

    let err = validate(usr);
    if (err) {
        res.status(400).send(err);
        return;
    }

    if (users.exists(usr.name)) {
        res.status(409).send("Username already registered!");
        return;
    }

    users.add(usr.name, {
        name: usr.name,
        pubkey: usr.pubkey,
        secret: usr.secret,
        hash2: usr.hash2
    });

    res.status(200).send("User successfully registered!");
    console.log("new user: " + usr.name);
});

module.exports = router;
