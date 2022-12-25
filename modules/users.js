const fs = require('fs');

const db = JSON.parse(
    fs.readFileSync('data/users.json')
);

/**
 * Writes the current user DB to data/users.json.
 */
function save() {
    fs.writeFileSync(
        'data/users.json',
        JSON.stringify(db, undefined, 4)
    );
}

/**
 * Returns the body data associated with a given username.
 * @param {string} username the username to retrieve
 * @returns the DB entry of the given user
 */
function get(username) {
    return db[username];
}

/**
 * Returns whether a username is registered.
 * @param {*} username the name to check
 * @returns whether the username is a key in the database
 */
function exists(username) {
    return username in db;
}

/**
 * Adds an entry with the given username and body data,
 * and saves the user DB to data/.users.json.
 * @param {string} username the new username
 * @param {*} the user's registration data
 */
function add(username, body) {
    db[username] = body;
    save();
}

module.exports = {save, get, add, exists};