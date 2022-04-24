import './Search.css'

import React from 'react'

const Search = (props) => {
    return (
        <form action="#" className="formSearch">
            <input type="text" name="q" id="search" />
            <button type="submit">
                <i className="fas fa-search"></i>
            </button>
        </form>
    )
}

export default Search
