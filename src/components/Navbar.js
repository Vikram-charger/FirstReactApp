import React from "react";
import logo from '../assets/reactjs-icon.png';

export default function Navbar(){
    return (
        <nav className="nav-header">
            <img src={logo} alt="logo"/>
            <h1>ReactFacts</h1>
            <h3>ReactCourse-Project 1</h3>
        </nav>
    )
}