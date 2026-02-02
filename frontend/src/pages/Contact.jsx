import React from 'react'
import Title from '../components/Title'

const Contact = () => {
    return (
        <div className='w-full'>
            <div className='w-full bg-(--primary-color)/5 py-16'>
                <Title title='Contact ' title_span='Us' subtitle="Have a question or want to learn more about our programs? We'd love to hear from you. Send us a message and we'll respond as soon as possible." align='text-center' />
            </div>
            <div>
                <div className='max-w-[90%] md:max-w-[60%] mx-auto py-16 flex flex-col items-center gap-6'>
                    <form className='w-full flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name">Name <span className='text-red-500'>*</span></label>
                            <input id="name" type="text" placeholder='Your Name' className='w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-(--secondary-color)' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email">Email <span className='text-red-500'>*</span></label>
                            <input id="email" type="email" placeholder='Your Email' className='w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-(--secondary-color)' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="message">Message <span className='text-red-500'>*</span></label>
                            <textarea id="message" placeholder='How can we help?' rows='5' className='w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-(--secondary-color)'></textarea>
                        </div>

                        <button type='submit' className='bg-(--primary-color) text-white px-8 py-5 md:px-10 md:py-6 rounded-full hover:bg-(--secondary-color) transition duration-300 cursor-pointer'>Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
