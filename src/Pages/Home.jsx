import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../Components/Header'
import Content from '../Components/Content'
import Frame from '../Components/Frame'

import { AuthContext } from '../Context/AuthContext'
import { getVehicles, getEmployees } from '../Api'

const Home = () => {
    const { user } = useContext(AuthContext)

    const vehiclesUser = user.vehicles.length
    const [vehicles, setVehicles] = useState('...')
    const [employees, setEmployees] = useState('...')

    useEffect(() => {
        ;(async () => {
            const resVehicles = await getVehicles()
            setVehicles(resVehicles.data.vehicles.length)

            const resEmployees = await getEmployees()
            setEmployees(resEmployees.data.employees.length)
        })()
    }, [])

    return (
        <>
            <Header search />
            <Content
                title={`Seja bem-vindo(a), ${String(user.name)}`}
                subtitle="Menu"
                size={'1000px'}
            >
                <div className="cards">
                    <Link to="./veiculos-reservados">
                        <Frame
                            title="Veículos reservados e vendidos"
                            subtitle="Veículos reservados e vendidos por você"
                            quantity={`${vehiclesUser} Veículos`}
                            image="Card1.jpg"
                        />
                    </Link>
                    <Link to="/veiculos">
                        <Frame
                            title="Listagem geral de veículos"
                            subtitle="Listagem de veículos de toda a empresa"
                            quantity={`${vehicles} Veículos`}
                            image="Card2.jpg"
                        />
                    </Link>
                    <Link to="/funcionarios">
                        <Frame
                            title="Funcionários da empresa"
                            subtitle="Listagem de todos os funcionários da empresa"
                            quantity={`${employees} Funcionários`}
                            image="Card3.jpg"
                        />
                    </Link>
                </div>
            </Content>
        </>
    )
}

export default Home
