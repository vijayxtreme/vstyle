import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="clearfix" style={{
     backgroundColor: `black`
  }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
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
          {siteTitle}
        </Link>
      </h1>
      <ul className="desktop-menu">
        <li><Link style={{color:`white`}} to="/">Home</Link></li>
        <li><Link style={{color:`white`}} to="about">About</Link></li>
        <li><Link style={{color:`white`}} to="experience">Experience</Link></li>
        <li><Link style={{color:`white`}} to="contact">Contact</Link></li>
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
