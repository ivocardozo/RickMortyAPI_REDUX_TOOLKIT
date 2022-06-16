import React from 'react'
import { NavLink } from 'react-router-dom';
import Sidebar, { sidebarTypes } from '../Sidebar/Sidebar';
import "./startpage.scss";

const startpage_img = require("../../images/startpage-img.png");
const arrow_right = require("../../images/arrow-right.png");

const Startpage = () => {
    return (<div className="startpage">
        <Sidebar type={sidebarTypes.startpage} />
        <div className="container">
            <div className="startpage__links">
                <NavLink to="/characters">characters</NavLink>
                <NavLink to="/episodes">episodes</NavLink>
                <NavLink to="/locations">locations</NavLink>
            </div>
            <div className="startpage__text">
                <h3>Rick&Morty API by David</h3>
                <h1>Front-end Developer</h1>
                <h3>React - Redux - Typescript</h3>
                <p>Hey, check gbhhout it, Morty. This guy can make website for us.</p>
                <NavLink to="/characters">
                    Get schwift
                    <img src={ arrow_right } alt="" />
                </NavLink>
            </div>
            <img className="startpage__img" src={startpage_img} alt="" />

        </div>
    </div>)
}

export default Startpage