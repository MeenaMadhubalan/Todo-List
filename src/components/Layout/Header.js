import React from 'react'
import {Link } from 'react-router-dom';
export default function Header() {
    return ( <header className="d-flex justify-content-between" >

        <div className="p-2"><h3 > My Todo List </h3> </div>
       <div className="p-2"> <Link style={linkStyle} to="/">Home</Link> |<Link style={linkStyle} to="/app">App</Link> | <Link style={linkStyle} to="/about">About</Link></div>
        </header>
        
    )
}



const linkStyle = {
    color: 'black',
    size : '1px'
	}