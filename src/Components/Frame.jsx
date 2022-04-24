import './Frame.css'

import React from 'react'

const Frame = (props) => {
    const { title, subtitle, quantity, image } = props

    return (
        <div className="frame">
            <div className="content">
                <div>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <p className="quantity">{quantity}</p>
            </div>
            <div
                className="image"
                style={{ backgroundImage: `url('images/${image}')` }}
            ></div>
        </div>
    )
}

export default Frame
