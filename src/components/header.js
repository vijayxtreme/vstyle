import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="clearfix" style={{
     backgroundColor: `black`
  }}>
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, fontSize: `1.25rem` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
         Vijay Menon | Portfolio
        </Link>
      </h1>
      <ul className="desktop-menu">
        <li><Link style={{color:`white`}} to="/">Home</Link></li>
        <li><Link style={{color:`white`}} to="/about">About</Link></li>
        <li><Link style={{color:`white`}} to="/resume">Resume</Link></li>
        <li><Link style={{color:`white`}} to="/contact">Contact</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
