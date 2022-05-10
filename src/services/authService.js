const url = 'http://localhost:3030';

export const login = async (userData) => {
    let response = await fetch(`${url}/users/login`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (response.ok == false) {
        const error = await response.json();
        throw error.message;

    } else {
        return await response.json();

    }

}

export const register = (data) => {
    return fetch(`${url}/users/register`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
}

export const getUser = () => {
    let email = localStorage.getItem('email');

    return email;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}

export const logout = (token) => {
    return fetch(`${url}/users/logout`, {
        method: 'get',
        headers: {
            'X-Authorization': token
        }
    });
}