import axios from 'axios'
const host = 'http://localhost:3000/auth'

//signup
export const signup = (user) => {
    console.log(user)
    return axios.post(host + "/signup", user, {})
    .then(r => r.data)
    .catch(e => e.response)
}

//login
export const login = (user) => {
    return axios.post(host+"/login", user, {withCredentials: true})
    .then(r => r.data)
    .catch(e => e.response)
}
//logout
export const logout = (user) => {
    return axios.post(host+"/logout", user, {withCredentials: true})
    .then(r => r.data)
    .catch(e => e.response)
}

//profile
export const profile = () => {
    return axios.get(host+"/profile", {withCredentials:true})
    .then(r => r.data)
    .catch(e => e.response)
}