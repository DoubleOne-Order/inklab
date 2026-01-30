import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='w-full'>
            <div className='w-full bg-(--primary-color)/5 py-8'>
                <Title title='Our Story and ' title_span='Purpose' subtitle='Empowering the next generation to write their futures with confidence, clarity, and purpose.' align='text-center' />
            </div>
            <div className=' bg-(--secondary-color)/5 px-6 md:px-12 py-10 lg:py-16'>
                <div className=' max-w-[90%] md:max-w-[80%] mx-auto flex flex-col md:flex-row gap-12 items-center justify-center'>
                    <div className='flex flex-col gap-4 bg-white shadow rounded-sm py-11 px-8 max-w-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target h-12 w-12 text-accent mb-6"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                        <h3 className='text-xl font-ivymode' >Our Mission</h3>
                        <p className='text-gray-700'>To equip young students and professionals with the skills, mindset, and selfbelief to take charge of their own success.</p>
                    </div>
                    <div className='flex flex-col gap-4 bg-white shadow rounded-sm py-8 px-8 max-w-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-12 w-12 text-accent mb-6"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        <h3 className='text-xl font-ivymode' >Our Vision</h3>
                        <p className='text-gray-700'>To nurture a generation of confident, capable, and purpose-driven learners and professionals who are empowered to create meaningful impact in their communities and careers.</p>
                    </div>
                </div>
            </div>

            {/*Founder's section*/}
            <div className='w-full'>
                <div className='max-w-[90%] md:max-w-[80%] mx-auto px-6 md:px-12 py-10 md:py-30'>
                    <div className='w-full flex flex-col md:flex-row gap-8'>
                        <div className='px-4 flex-1 flex items-center justify-center'>
                            <img src={assets.founder} alt="Founder" className='max-w-220 rounded-lg shadow-md' />
                        </div>
                        <div className='flex-1 flex flex-col gap-8 px-8'>
                            <h2 className='text-3xl font-ivymode mb-4'>Meet Our <span>Founder</span></h2>
                            <h3 className='font-bold text-base md:text-lg'>Charles Githara</h3>
                            <p>Learning Consultant & Corporate Trainer</p>
                            <p className='italic text-gray-700'>"Ink Lab exists to help individuals turn potential into purpose. Every person deserves the chance to discover their strengths and build a path to success."</p>
                            <p className='text-gray-700'>With years of experience in learning and development, Charles founded Ink Lab Consulting to address the growing need for personalized mentorship and practical skills development among young people navigating their education and career journeys.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-(--primary-color)/5 py-12 md:py-16 flex flex-col items-center justify-center'>
                <Title title='Ready to Work with ' title_span='Us' subtitle='We are committed to expanding our reach and impact, ensuring more young people have access to the guidance and support they need to thrive.' align='text-center' />
                <button className='bg-(--secondary-color) text-white text-sm md:text-base px-8 py-4 md:px-16 md:py-6 rounded-full shrink-0 cursor-pointer hover:bg-(--primary-color) ease-in-out duration-300'>Book a Session</button>
            </div>
        </div>
    )
}

export default About
