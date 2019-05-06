import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register',{
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    })
    console.log('register route ')
}

export const login = user => {
    return axios
    .post('users/login', {
        email: user.email,
        password: user.password
    })
}