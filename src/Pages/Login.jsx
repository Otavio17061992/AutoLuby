import './Login.css'
import '../assets/css/Button.css'
import '../assets/css/Input.css'
import '../assets/css/Label.css'

import React, { useState, useContext } from 'react'

import Checkbox from '../Components/Checkbox'

import { AuthContext } from '../Context/AuthContext'

const Login = () => {
    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <div className="login">
            <div className="left">
                <img src="logo.svg" alt="AutoLuby" className="logo" />

                <div className="auth">
                    <div>
                        <h1 className="title">Bem-vindo à AutoLuby</h1>
                        <p className="subtitle">
                            Faça o login para acessar sua conta.
                        </p>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="form">
                            <div>
                                <label className="label" htmlFor="email">
                                    Endereço de email
                                </label>
                                <input
                                    required
                                    className="input"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="@mail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="label" htmlFor="password">
                                    Senha
                                </label>
                                <input
                                    required
                                    autoComplete="true"
                                    className="input"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="senha"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <div className="links">
                                <Checkbox
                                    inputType="checkbox"
                                    inputName="lembrar"
                                    inputId="lembrar"
                                    inputPlaceholder="Lembrar minha senha"
                                />

                                <a href="?lembrar" alt="Esqueceu a senha?">
                                    Esqueceu a senha?
                                </a>
                            </div>

                            <button className="button" type="submit">
                                Entrar
                            </button>
                        </form>

                        <p className="signUp">
                            Ainda não tem uma conta? &nbsp;
                            <a href="?nova-conta" alt="Criar conta">
                                Criar conta
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="background"></div>
        </div>
    )
}

export default Login
