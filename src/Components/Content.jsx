import './Content.css'

import React from 'react'

const Content = (props) => {
    const { title, subtitle, size } = props
    return (
        <main>
            <div className="content" style={{ maxWidth: size }}>
                <div className="intro">
                    <h1 className="title">{title}</h1>
                    <h6 className="subtitle">{subtitle}</h6>
                </div>
                <div>{props.children}</div>
            </div>
        </main>
    )
}

export default Content
