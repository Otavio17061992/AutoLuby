import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'

import Login from './Pages/Login'
import Home from './Pages/Home'
import Employees from './Pages/Employees'
import Vehicles from './Pages/Vehicles'

import { AuthProvider, AuthContext } from './Context/AuthContext'

const RoutesApp = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)

        if (loading) {
            return <div className="loading">Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate to="/login" />
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        exact
                        path="/funcionarios"
                        element={
                            <Private>
                                <Employees />
                            </Private>
                        }
                    />
                    <Route
                        exact
                        path="/veiculos"
                        element={
                            <Private>
                                <Vehicles />
                            </Private>
                        }
                    />
                    <Route
                        exact
                        path="/veiculos-reservados"
                        element={
                            <Private>
                                <Vehicles />
                            </Private>
                        }
                    />
                    <Route
                        exact
                        path="/"
                        element={
                            <Private>
                                <Home />
                            </Private>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default RoutesApp
