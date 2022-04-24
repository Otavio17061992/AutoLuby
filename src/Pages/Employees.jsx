import React, { useEffect, useState } from 'react'

import Header from '../Components/Header'
import Content from '../Components/Content'
import Table from '../Components/Table'

import { getEmployees } from '../Api'

const Employees = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        ;(async () => {
            const response = await getEmployees()
            setEmployees(response.data.employees)
        })()
    }, [])

    return (
        <>
            <Header />
            <Content title="Funcionários">
                <Table
                    data={employees}
                    title="Listagem de funcionários da empresa"
                    lastLarger
                    money="salary"
                />
            </Content>
        </>
    )
}

export default Employees
