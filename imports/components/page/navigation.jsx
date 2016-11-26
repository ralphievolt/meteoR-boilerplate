import React from 'react'
import { IndexLink, Link } from 'react-router'

export const Navigation = () => (

    <div className="container">
        <h2>MeteoR Boilerplate</h2>
        <ul>
            <li><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
            <li><Link to="/one" activeClassName="active">Page One</Link></li>
            <li><Link to="/two" activeClassName="active">Page Two</Link></li>
            <li><Link to="/hello" activeClassName="active">Hello Params</Link></li>
        </ul>
    </div>
)