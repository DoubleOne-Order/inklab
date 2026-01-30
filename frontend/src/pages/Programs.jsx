import React from 'react'
import Title from '../components/Title'
import { programsContent } from '../assets/assets'

const Programs = () => {
    return (
        <div className='w-full'>
            <div className='w-full bg-(--primary-color)/5'>
                <Title title='Our ' title_span='Programs' subtitle='Comprehensive solutions designed to help students, professionals, and institutions achieve meaningful growth and lasting success.' align='text-center' />
            </div>
            <div className='max-w-[90%] md:max-w-[80%] mx-auto py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {programsContent.map((program) => (
                        <div key={program.id} className='bg-white rounded-lg p-8 shadow-sm'>
                            <div className='text-5xl mb-4'>{program.icon}</div>
                            <h3 className='text-xl font-semibold text-gray-800 mb-3'>{program.title}</h3>
                            <p className='text-gray-600 text-sm mb-6'>{program.subtitle}</p>
                            <ul className='space-y-3 mb-6'>
                                {program.features.map((feature, index) => (
                                    <li key={index} className='flex items-start gap-3 text-gray-600 text-sm'>
                                        <span className='text-(--secondary-color) font-bold mt-0.5'>✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className='w-full border border-gray-300 text-gray-700 py-3 rounded hover:bg-gray-50 transition'>
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Programs
