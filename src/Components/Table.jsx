import './Table.css'

import React from 'react'

import Pagination from './Pagination'
import Search from './Search'

const Table = (props) => {
    const { lastLarger, data, title, tag, money } = props

    const handleThead = (data) => {
        if (data.length > 0) {
            return (
                <tr className={`${lastLarger ? 'lastLarger' : ''}`}>
                    {Object.keys(data[0]).map((prop) => (
                        <th key={generateKey()}>{prop}</th>
                    ))}
                </tr>
            )
        }

        return null
    }

    const handleTbody = (data) => {
        if (data) {
            return (
                <tr>
                    {Object.entries(data).map((prop) => (
                        <td
                            data-label={prop[0]}
                            key={generateKey()}
                            className={`${tag === prop[0] ? prop[1] : ''}`}
                        >
                            <span>
                                {`${
                                    money === prop[0]
                                        ? formatCurrency(prop[1])
                                        : prop[1]
                                }`}
                            </span>
                        </td>
                    ))}
                </tr>
            )
        }

        return null
    }

    const generateKey = () => {
        return parseInt(+new Date() + (Math.floor(Math.random() * 9999) + 1))
    }

    const formatCurrency = (value) => {
        return (
            'R$ ' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        )
    }

    return (
        <div className="dataTable">
            {data ? (
                <>
                    <div className="headerTable">
                        <h3>{title}</h3>
                        <div>
                            <Pagination />
                            <Search />
                        </div>
                    </div>

                    <table className="table">
                        <thead>{handleThead(data)}</thead>
                        <tbody>{data.map((emp) => handleTbody(emp))}</tbody>
                    </table>
                </>
            ) : (
                <p>Nenhum dado recebido...</p>
            )}
        </div>
    )
}

export default Table
