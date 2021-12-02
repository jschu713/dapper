import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Tooltip from '@material-ui/core/Tooltip';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

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
                                title={<h2> Find your next great look here at dapper.
                                    Select the occassion, season, and clothing color on the left filter pane.
                                    Then hit submit to get some fashion inspiration.
                                    The reset button is also there in case you change your mind and want new choices.
                                </h2>}
                                placement='bottom' className='tooltip'>
                                <Link to='/' className='nav-links'>
                                    <i className='fas fa-question' />
                                </Link>
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
