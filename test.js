fetch('api/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: {
        foo: 'bar'
    }
});
