import React, { useEffect, useState } from 'react'

import Header from '../Components/Header'
import Content from '../Components/Content'
import Table from '../Components/Table'

import { getVehicles } from '../Api'

const Vehicles = () => {
    const currentUrl = window.location.pathname
    const [title, setTitle] = useState('Seus Veículos')
    const [subtitle, setSubitle] = useState(
        'Listagem de veículos reservados e vendidos'
    )
    const [vehicles, setVehicles] = useState(null)

    useEffect(() => {
        if (currentUrl === '/veiculos') {
            setTitle('Todos Veículos')
            setSubitle('Listagem geral de veículos')
            ;(async () => {
                const response = await getVehicles()
                setVehicles(response.data.vehicles)
            })()
        } else {
            const userVehicles = JSON.parse(localStorage.getItem('user'))
            setVehicles(userVehicles.vehicles)
        }
    }, [currentUrl])

    return (
        <>
            <Header />
            <Content title={title}>
                <Table
                    data={vehicles}
                    title={subtitle}
                    tag="status"
                    money="value"
                />
            </Content>
        </>
    )
}

export default Vehicles
