import React from 'react'
import './style.css'
import { NavLink } from "react-router-dom";

const data = [
  {
    id: 1,
    navLink: "mercury",
    color: "rgb(65, 158, 187)",
  },
  {
    id: 2,
    navLink: "venus",
    color: "rgb(237, 162, 73)",
  },
  {
    id: 3,
    navLink: "earth",
    color: "rgb(109, 46, 213)",
  },
  {
    id: 4,
    navLink: "mars",
    color: "rgb(209, 76, 50)",
  },
  {
    id: 5,
    navLink: "jupiter",
    color: "rgb(216, 58, 52)",
  },
  {
    id: 6,
    navLink: "saturn",
    color: "rgb(205, 81, 32)",
  },
  {
    id: 7,
    navLink: "uranus",
    color: "rgb(30, 193, 162)",
  },
  {
    id: 8,
    navLink: "neptune",
    color: "rgb(45, 104, 240)",
  },
]


const Navbar = () => {
  return (
    <div className='navbarSection'>
      <div className='navbar lg:px-24 py-2 md:px-10 sm:px-10'>
        <ul className='flex flex-wrap justify-between text-white uppercase font-bold text-sm lg:text-xs md:text-xs'>
          <li className='lg:w-1/5 md:w-full sm:w-auto flex justify-center py-4'><NavLink to='/'><img src="./images/logo.png" alt="logo img" /></NavLink></li>
          <div className="main" onClick={()=>{
            document.querySelector(".nav-item").classList.toggle("open");
          }}>
            <div className="menu">
              <input type="checkbox" name="" />
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
          <ul className='nav-item lg:w-3/5 lg:flex md:flex justify-between items-center md:w-full md:py-2 sm:w-auto'>
            {
              data.map((link) => (
                <li key={link.id} className="sm:block"><NavLink className="menu-link" onClick={()=>{document.querySelector(".main input").click()}} exact activeStyle={{ color: `${link.color}` }} to={`/${link.navLink}`}>{link.navLink}</NavLink></li>
              ))
            }
          </ul>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Navbar