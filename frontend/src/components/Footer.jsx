import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='w-full bg-(--primary-color) px-10 md:px-30 py-20 text-sm text-gray-300/90'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
                <div className='flex flex-col gap-6 col-span-2'>
                    <img src={assets.logo} alt="Inklab Logo" className='w-18' />
                    <p>Empowering students and young professionals with skills, confidence, and purpose through mentorship, learning, and wellness-focused programs.</p>
                    <p>Subscribe to Our Newsletter</p>
                    <div className='inline-flex mb-12'>
                        <input type='text' className=' bg-gray-100  outline-none px-3 text-gray-700 py' />
                        <button className='bg-(--secondary-color) px-6 py-4 rounded-r-sm text-gray-50'>Subscribe</button>
                    </div>
                </div>



                <div className='flex flex-col gap-2 col-span-1'>
                    <h3 className='text-(--secondary-color) font-bold'>QUICK LINKS</h3>
                    <ul className='flex flex-col gap-2'>
                        <li><Link to='/' className='hover:text-(--secondary-color)'>Home</Link></li>
                        <li><Link to='/about' className='hover:text-(--secondary-color)'>About</Link></li>
                        <li><Link to='/programs' className='hover:text-(--secondary-color)'>Programs</Link></li>
                        <li><Link to='/pathways' className='hover:text-(--secondary-color)'>Pathways to Purpose</Link></li>
                        <li><Link to='/contact' className='hover:text-(--secondary-color)'>Contact</Link></li>
                        <li><Link to='/' className='hover:text-(--secondary-color)'>Blog</Link></li>
                    </ul>
                </div>



                <div className='flex flex-col gap-2 col-span-1'>
                    <h3 className='text-(--secondary-color) font-bold'>CONTACT</h3>
                    <ul className='flex flex-col gap-2'>
                        <li><a href="mailto:Inklab4Consulting@gmail.com" className='hover:text-(--secondary-color)'>Inklab4Consulting@gmail.com</a></li>
                        <div className='inline-flex'>
                            <li><a href="tel:+254701713490" className='hover:text-(--secondary-color) shrink-0'>+254 701 713 490,&nbsp;&nbsp;</a></li>
                            <li><a href="tel:+254711377529" className='hover:text-(--secondary-color) shrink-0'>+254 711 377 529</a></li>
                        </div>
                        <li><a href="#" className='hover:text-(--secondary-color)'>Nairobi, Kenya</a></li>
                    </ul>
                </div>
            </div>


            <hr className='border-none h-px bg-(--secondary-color)/50' />


            <div className='flex items-center justify-center text-center pt-12'>&copy; {new Date().getFullYear()} Inklab Consulting. All rights reserved.</div>
        </div>
    )
}

export default Footer
