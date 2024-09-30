import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPenToSquare } from '@fortawesome/free-solid-svg-icons';   

import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="navbar">

        <div className="navbar-top">

            <div className='left'>
                <button className='toggleMenu'>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <Link className='logo'>
                <img src='/images/logo.png' />
            </Link>

            <div className='actions'>

                <Link className='my_account'>
                    My Account
                </Link>

                <Link>
                    <FontAwesomeIcon icon={faPenToSquare} />
                    Write
                </Link>

            </div>

        </div>


    </nav>
  )
}

{/* 
        <div className='menu'>
            <ul>
                <li>
                    <Link>Home</Link>
                </li>

                <li>
                    <Link>All Posts</Link>
                </li>

                <li>
                    <Link>Log In</Link>
                </li>

                <li>
                    <Link>Sign Up</Link>
                </li>
            </ul>
        </div>
*/}

export default Navbar;