import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import './Navbar.css';
import Tooltip from '@material-ui/core/Tooltip';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        dapper <i className="fas fa-user-tie fa-sm" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-question'} />
                    </div>
                    <ul className={click ? 'nav-tip active' : 'nav-tip'} >
                        <li className='nav-item'>
                            <Tooltip
                                title={<h2> Here would be tips on how to use the site to filter your fashion choices.</h2>}
                                placement='bottom' className='tooltip'>
                                <Link to='/' className='nav-links'>
                                    <i className='fas fa-question' />
                                </Link>
                            </Tooltip>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn-outline'><i className={click ? 'fas fa-times' : 'far fa-question-circle'} /></Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
