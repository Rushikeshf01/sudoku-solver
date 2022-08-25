import React from 'react'
import '../styles/Header.css'
export default function Navbar(props) {
  return (
    <div className="header">
        <h1>{props.appName}</h1>
    </div>
  )
}
