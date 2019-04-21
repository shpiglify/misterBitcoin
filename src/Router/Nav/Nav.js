import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './Nav.scss'

const Nav = (props) => (
  <nav className="nav-menu">
    {props.isLogin && (
      <>
        <div>
          <NavLink exact className="nav-link" to="/" activeClassName="activeRoute">🏠</NavLink>
          <NavLink className="nav-link" to="/contact" activeClassName="activeRoute">📞</NavLink>
          <NavLink className="nav-link" to="/statistic" activeClassName="activeRoute">📈</NavLink>
          <NavLink className="nav-link" to="/user" activeClassName="activeRoute">🧑🏻</NavLink>
        </div>
        <button
          onClick={() => {
            props.logout().then(() => {
              props.history.push('/')
            })
          }}
          className="btn-flat"
        >
          Logout
        </button>
      </>
    )}
  </nav>
)

export default withRouter(Nav)
