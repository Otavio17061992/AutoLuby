import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://autoluby.dev.luby.com.br',
})

export const createSession = async (email, password) => {
    return api.post('/login', { email, password })
}

export const getEmployees = async () => {
    return api.get('/employees?noPaginate')
}

export const getVehicles = async () => {
    return api.get('/vehicles?noPaginate')
}
