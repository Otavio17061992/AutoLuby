import './Header.css'
import React, { useContext } from 'react'

import Search from './Search'

import { AuthContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const { search } = props
    const { logout } = useContext(AuthContext)

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src="logo.svg" alt="AutoLuby" className="logo" />
                </Link>
            </div>

            {search ? (
                <div className="search">
                    <Search />
                </div>
            ) : (
                ''
            )}

            <div className="logout">
                <button className="button" onClick={logout}>
                    Sair <i className="fas fa-sign-out-alt"></i>
                </button>
            </div>
        </header>
    )
}

export default Header
