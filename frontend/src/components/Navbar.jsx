import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className="w-full px-8 py-4 mx-auto">
            <header className="w-full px-5 py-4 flex justify-between items-center">
                <img src={assets.logo} alt='inlab logo' className='w-16' />
                <nav className='hidden md:block'>
                    <ul className='flex justify-between items-center gap-10 text-gray-400 '>
                        <li><Link to='/' className='hover:text-(--secondary-color)'>Home</Link></li>
                        <li><Link to='/about' className='hover:text-(--secondary-color)'>About</Link></li>
                        <li><Link to='/programs' className='hover:text-(--secondary-color)'>Programs</Link></li>
                        <li><Link to='/Pathways' className='shrink-0 hover:text-(--secondary-color)'>Pathways to Purpose</Link></li>
                        <li><Link to='contact' className='hover:text-(--secondary-color) cursor-pointer'>Contact</Link></li>
                    </ul>
                </nav>
                <Link to='/book'><button className='hidden md:block bg-blue-950 text-white px-8 py-4 rounded-full shrink-0'>Book a Session</button></Link>
            </header>
        </div>
    )
}

export default Navbar
