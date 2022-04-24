import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { api, createSession } from '../Api'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')
        const recoveredToken = localStorage.getItem('token')

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
            api.defaults.headers.Authorization = `Bearer ${recoveredToken}`
        }

        setLoading(false)
    }, [])

    const login = async (email, password) => {
        const response = await createSession(email, password)

        const session = response.data
        const loggedUser = session.user
        const token = session.token

        localStorage.setItem('user', JSON.stringify(loggedUser))
        localStorage.setItem('token', token)
        localStorage.setItem('dataSession', JSON.stringify(session))

        api.defaults.headers.Authorization = `Bearer ${token}`

        setUser(loggedUser)

        navigate('/')
    }

    const logout = () => {
        api.defaults.headers.Authorization = null

        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('dataSession')

        setUser(null)

        navigate('/login')
    }

    if (loading) {
        return <div>Carregando...</div>
    }

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }
