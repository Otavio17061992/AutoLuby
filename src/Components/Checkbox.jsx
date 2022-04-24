import './Checkbox.css'

import React from 'react'

const Checkbox = (props) => {
    const { inputType, inputName, inputId, inputPlaceholder } = props

    return (
        <label className="label container">
            {inputPlaceholder}
            <input
                className="input"
                type={inputType}
                name={inputName}
                id={inputId}
            />
            <span className="checkmark"></span>
        </label>
    )
}

export default Checkbox
