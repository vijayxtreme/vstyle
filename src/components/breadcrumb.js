import React from 'react'
import {Link} from 'gatsby'

const Breadcrumb = ({title="", link, subtitle=""}) => {
    return (
        <section className="vaporwave breadcrumb">
            <h3 style={{fontWeight: `300`}}><Link to="/">Home</Link> / {link ? <Link to={`/${link}`}>{title}</Link> : title}{subtitle ? ` / ${subtitle}`: ''}</h3>
        </section>
    )
}

export default Breadcrumb