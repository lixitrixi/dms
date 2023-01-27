'use strict'
const sc = window.crypto.subtle;

function generateKeys() {
    return sc.generateKey(
        {
            name: "RSA-OAEP",
            modulusLength: 4096,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256"
        },
        true,
        ["encrypt", "decrypt"]
    );
}

function getRegisterData() {
    // let username = document.getElementById("username").value;
    // let password = document.getElementById("password").value;

    // do some input validation

    // return {username, password};

    return {
        username: 'lixitrixi',
        password: 'password123'
    };
}

async function secure(pwd) {

    var salt = new Uint8Array(32);
    var iv = new Uint8Array(32);
    window.crypto.getRandomValues(salt);
    window.crypto.getRandomValues(iv);

    let key = await sc.importKey(
        'raw',
        pwd,
        'PBKDF2',
        false,
        ['deriveKey']
    );

    return await sc.exportKey('raw', key);
}

function register() {
    let {username, password} = getRegisterData();

    console.log(username);
    console.log(password);

    let pwd = new TextEncoder().encode(password);

    secure(pwd).then(key => {
        console.log(key);
    });

    // let cipherKey = scryptSync(password, salt, 32);
    // console.log(cipherKey);

    // let secret = createCipheriv('aes-256-gcm', cipherKey, iv)
    // .update(privateKey);
    // console.log(secret);

    // let pwdhash = createHash('sha512')
    // .update(password + salt);
    // console.log(pwdhash);

    // let usr = {
    //     username,
    //     pwd_hash: pwdhash.digest('hex'),
    //     public_key: publicKey,
    //     secret: secret.toString('base64'),
    //     salt: salt.toString('base64'),
    //     iv: iv.toString('base64')
    // };

    // console.log(usr);

    // fetch('/api/register', {
    //     method: 'POST',
    //     body: usr
    // }).then(() => {
    //     alert('Registration sent');
    // });
}

document.getElementById('submit')
.onclick = register;
