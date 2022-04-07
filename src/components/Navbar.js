import React from 'react'
import './style.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
      <div className='navbarSection'>
        <div className='px-24 py-6 lg:px-12'>
          <ul className='flex justify-between text-white uppercase font-bold text-sm lg:text-xs md:text-xs px-1'>
            <li><NavLink to='/'><img src="./images/logo.png" alt="logo img"/></NavLink></li>
            <ul className='flex justify-between align-baseline'>
              <li><NavLink to='/'>mercury</NavLink></li>
              <li><NavLink to='venus'>venus</NavLink></li>
              <li><NavLink to='earth'>earth</NavLink></li>
              <li><NavLink to='mars'>mars</NavLink></li>
              <li><NavLink to='jupiter'>jupiter</NavLink></li>
              <li><NavLink to='saturn'>saturn</NavLink></li>
                <li><NavLink to='uranus'>uranus</NavLink></li>
                <li><NavLink to='neptune'>neptune</NavLink></li>
            </ul>
          </ul>
        </div>
        <hr />
      </div>
  );
}

export default Navbar