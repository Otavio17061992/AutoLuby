import './Pagination.css'

import React from 'react'

const Pagination = () => {
    return (
        <div className="pagination">
            <a href="?pag=X" className="navNextPrev inactive">
                <i className="fas fa-arrow-left"></i>
                Anterior
            </a>
            <div className="buttonsPages">
                <a href="?pag=X">1</a>
                <a href="?pag=X" className="active">
                    2
                </a>
                <a href="?pag=X">3</a>
            </div>
            <a href="?pag=X" className="navNextPrev">
                Próxima
                <i className="fas fa-arrow-right"></i>
            </a>
        </div>
    )
}

export default Pagination
