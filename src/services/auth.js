
export const validateSessionToken = (jwt) => {
    const request = new Request(`http://localhost:4000/auth/validateToken`, { method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({jwt}) });
    return fetch(request);
};
