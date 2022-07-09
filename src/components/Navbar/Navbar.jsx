import React, { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
const Navbar = () => {

    const [toggle, setToggle] = useState(false);


    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="logo" />
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                    <li key={`link-${item}`} className="app__flex p-text">
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>

                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                
                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }} //x = 300 means 300pixel
                            transition={{duration: 0.85, ease: 'easeOut'}}
                        >
                            <HiX onClick={() => setToggle(false)}/>
                            <ul>
                                {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                                    <li key={item} >
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>

                                ))}
                            </ul>
                        </motion.div>
                    )
                }
            </div>

        </nav>
    )
}

export default Navbar