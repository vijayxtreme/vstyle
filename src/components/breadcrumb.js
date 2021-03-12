import React from 'react'

const Breadcrumb = ({title=""}) => {
    return (
        <section className="vaporwave breadcrumb">
            <h3 style={{fontWeight: `300`}}><a href="/">Home</a> / {title}</h3>
        </section>
    )
}

export default Breadcrumb