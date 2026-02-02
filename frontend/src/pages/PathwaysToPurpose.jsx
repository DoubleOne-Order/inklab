import React from 'react'
import Title from '../components/Title'
import { assets, journeySteps, gainPoints } from '../assets/assets'

const PathwaysToPurpose = () => {
    return (
        <div className='w-full'>
            <div className='w-full bg-(--primary-color)/5'>
                <div className='max-w-[90%] md:max-w-[80%] mx-auto py-16 flex flex-col-reverse md:flex-row gap-6'>
                    <div className=' flex-1/2'>
                        <Title title='Pathways to ' title_span='Purpose' subtitle='A structured five-session mentorship journey that helps learners understand themselves, explore opportunities, and build confidence for life beyond school.' align='' />
                        <button className="bg-(--primary-color) text-white px-8 py-5 md:px-10 md:py-6 rounded-full hover:bg-(--secondary-color) transition duration-300 cursor-pointer">Enroll Today</button>
                    </div>
                    <div className='flex-1/2 flex items-center justify-center px-6'>
                        <img src={assets.pathways} alt="Pathways to Purpose" className='max-w-80 md:max-w-100 rounded-full' />
                    </div>
                </div>

            </div>

            <div className='w-full bg-(--primary-color)/10'>
                <div className='max-w-[90%] md:max-w-[80%] mx-auto py-16 flex flex-col items-center gap-6'>
                    <Title title="The " title_span="Journey" subtitle="Five transformative sessions designed to guide you from uncertainty to clarity." align="text-center" />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {journeySteps.map((step) => (
                            <div key={step.id} className='flex flex-col justify-center items-center max-w-100 bg-(--secondary-color)/10 px-6 py-12 text-center gap-6 rounded-sm'>
                                <div className='bg-(--secondary-color)/50 text-(--primary-color) rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold font-ivymode'> {step.id} </div>
                                <div className='flex flex-col gap-6'>
                                    <h3 className='text-xl font-ivymode text-gray-800'>{step.title}</h3>
                                    <p className='text-gray-600 text-xs md:text-sm'>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className='max-w-[90%] md:max-w-[80%] mx-auto py-16 flex flex-col items-center gap-6'>
                    <Title title="What you will " title_span="Gain" subtitle="Tangible outcomes that prepare you for life's opportunities and challenges." align="text-center" />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {gainPoints.map((point) => (
                            <div key={point.id} className='flex items-center gap-4 mb-6 bg-green-50 px-4 py-6 rounded-md'>
                                <div className='bg-green-300 text-(--primary-color) rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold font-ivymode shrink-0'>✓</div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='text-md font-ivymode text-(--primary-color)'>{point.title}</h3>
                                    <p className='text-gray-600 text-sm'>{point.point}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='w-full bg-(--secondary-color)/10'>
                <div className='max-w-[90%] md:max-w-[80%] mx-auto py-16 flex flex-col items-center'>
                    <Title title="Ready to Find Your " title_span="Path?" subtitle="Start your Pathways to Purpose journey today and discover the clarity and confidence you've been looking for." align="text-center" />
                    <button className="bg-(--primary-color) text-white px-8 py-5 md:px-10 md:py-6 rounded-full hover:bg-(--secondary-color) transition duration-300 cursor-pointer">Enroll Today</button>
                </div>
            </div>

        </div>
    )
}

export default PathwaysToPurpose
