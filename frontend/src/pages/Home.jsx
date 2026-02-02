import React from 'react'
import { assets, challengeContent, approachContent, testimonialContent, whoWeServeContent } from '../assets/assets.js'
import Title from '../components/Title.jsx'

const Home = () => {
    return (
        <div className='min-h-screen w-full'>
            {/*Hero Section */}
            <div className="container max-w-[90%] md:max-w-[80%] mx-auto px-5 py-6 flex flex-col items-center justify-center">
                <h1 className='text-6xl md:text-7xl lg:text-8xl font-ivymode text-(--primary-color) text-center mt-12 mb-5 md:leading-24'>Write your Future with <br />
                    <span className='text-(--secondary-color)'>Confidence</span></h1>
                <p className='max-w-3xl mx-auto text-center -my-2 text-sm md:text-base'>Mentorship, career guidance, and personal development programs designed to help students and young professionals discover their purpose and thrive.</p>
                <div className='w-full flex flex-col items-center justify-center md:flex-row gap-3 mt-10 transition-all'>
                    <button className='bg-(--primary-color) text-white text-sm md:text-base px-12 py-4 md:px-18 md:py-6 rounded-full shrink-0 cursor-pointer hover:bg-(--secondary-color) ease-in-out duration-300'>Book a Session</button>
                    <button className='bg-white text-(--primary-color) border text-sm md:text-base px-12 py-4 md:px-10 md:py-6 rounded-full shrink-0 cursor-pointer hover:bg-(--secondary-color) hover:text-amber-50 ease-in-out duration-300'>Explore our Programs</button>
                </div>
            </div>


            <div className='max-w-[90%] md:max-w-[80%] mx-auto bg-amber-200 mt-10 mb-30 rounded-md border-none overflow-hidden'>
                <img src={assets.hero} alt="" className='w-full object-cover' />
            </div>


            {/*The Challenge Section*/}
            <div className='max-w-[90%] md:max-w-[80%] mx-auto px-6 md:px-12'>
                <hr className='border-none h-px bg-(--secondary-color)/60 my-20' />

                <div>
                    <Title intro="THE CHALLENGE" title="Too much potential." title_span=" Not Enough Guidance" subtitle="We provide mentorship, career guidance, and personal development programs designed to help students and young professionals discover their purpose and thrive." align="text-center" />
                </div>


                <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-20'>
                    {challengeContent.map((challenge) => (
                        <div key={challenge.id} className='flex flex-col items-center justify-center gap-6 bg-gray-50 max-w-80 px-5 py-10 mb-8 rounded-md text-center'>
                            <div className='w-15 h-15 bg-(--secondary-color)/40 rounded-sm flex items-center justify-center'>
                                <img src={challenge.icon} alt="Challenge Icon" className='w-8 h-8' />
                            </div>
                            <h3 className='font-medium text-(--primary-color) text-sm md:text-lg'>{challenge.title}</h3>
                            <p className='text-gray-700 text-sm mb-6'>{challenge.description}</p>
                        </div>
                    ))}
                </div>

            </div>


            {/*Our Approach section */}
            <div className='w-full bg-(--secondary-color)/10 py-20 mt-10'>
                <div className='max-w-[80%] mx-auto px-6 md:px-12'>
                    <div>
                        <Title intro="OUR APPROACH" title='Four Pillars of ' title_span="Transformation" subtitle="We take a holistic approach to development, addressing not just career readiness but the complete growth of every individual we work with." align="text-center" />
                    </div>

                    <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-20'>
                        {approachContent.map((approach) => (
                            <div key={approach.id} className='flex flex-col flex-wrap items-center justify-center gap-6 bg-gray-50 px-6 py-12 mb-8 rounded-md text-center'>
                                <div className='w-15 h-15 bg-(--secondary-color)/40 rounded-sm flex items-center justify-center'>
                                    <img src={approach.icon} alt="Approach Icon" className='w-8 h-8' />
                                </div>
                                <h3 className='font-medium text-(--primary-color) text-sm md:text-lg'>{approach.title}</h3>
                                <p className='text-gray-700 text-sm mb-6'>{approach.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>


            {/*Pathways to purpose section*/}
            <div className='w-full bg-blue-300/10 py-20'>
                <div className='max-w-[90%] lg:max-w-[80%] mx-auto py-15 px-5 md:px-12'>
                    <div className='flex flex-col lg:flex-row gap-15'>
                        <div className='max-w-120 mx-auto flex items-center justify-center flex-1'>
                            <img src={assets.pathways} alt="pathways image" className='rounded-[100%]' />
                        </div>
                        <div className='flex-1'>
                            <div className='bg-(--secondary-color)/40 px-5 py-2 rounded-full max-w-50'>
                                <p className='text-sm font-medium'>Flagship Program</p>
                            </div>
                            <Title title="Pathways to " title_span="Purpose" subtitle="Our signature 5-session program designed to take you from confusion to clarity. Whether you're a student, recent graduate, or early-career professional, Pathways to Purpose will help you discover your direction and build a plan to get there." />
                            <ul className='px-4 flex flex-col gap-2 text-sm md:text-base -mt-5'>
                                <li>Clear understanding of your unique strengths</li>
                                <li>Defined career direction and goals</li>
                                <li>Professional CV and LinkedIn profile</li>
                                <li>Interview confidence and skills</li>
                                <li>Personalized action plan for next 12 months</li>
                            </ul>
                            <button className='bg-(--secondary-color) text-white text-sm md:text-base px-8 py-4 md:px-16 md:py-6 rounded-full mt-10 shrink-0 cursor-pointer hover:bg-(--primary-color) ease-in-out duration-300'>Join Pathways to Purpose</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-(--secondary-color)/10 py-20'>
                <div className='max-w-[80%] mx-auto px-8 md:px-12'>
                    <Title intro="WHO WE SERVE" title="Tailored Support for " title_span="Every Stage" subtitle="Whether you're a student finding your path, a parent seeking guidance for your child, or an institution looking to empower your community—we're here to help." align="text-center" />

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-10'>
                        {whoWeServeContent.map((item) => (
                            <div key={item.id} className='flex flex-col items-start justify-between gap-6 bg-white max-w-110 px-8 py-10 rounded-lg border border-gray-200 min-h-full hover:scale-105 transition-transform duration-300 cursor-pointer'>
                                <div>
                                    <h3 className='font-semibold font-ivymode text-(--primary-color) text-lg mb-1'>{item.title}</h3>
                                    <p className='text-(--secondary-color) text-sm mb-4'>{item.subtitle}</p>
                                    <p className='text-gray-700 text-sm md:text-base leading-relaxed'>{item.description}</p>
                                </div>

                                <div className='flex flex-wrap gap-2 w-full'>
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className='bg-(--secondary-color)/20 text-(--primary-color) text-xs md:text-sm px-3 py-1 rounded-full font-medium'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button className='text-(--secondary-color) text-sm font-medium mt-4 flex items-center gap-2 hover:gap-3 transition-all cursor-pointer'>
                                    Learn More <span>→</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className='w-full'>
                <div className='max-w-[90%] md:max-w-[80%] mx-auto px-12 py-20'>
                    <Title intro="TRUST & CREDIBILITY" title="Stories of " title_span="Transformation" subtitle="Real stories from real people who found their path" align="text-center" />

                    <div className='mt-16 overflow-hidden testimonial-container' style={{ height: '460px' }}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full'>
                            {/* First Column - Scroll Up */}
                            <div className='space-y-8 animate-scroll-up hover:animation-pause' onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'} onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}>
                                {[...testimonialContent.filter((_, i) => i % 3 === 0), ...testimonialContent.filter((_, i) => i % 3 === 0)].map((testimonial, idx) => (
                                    <div key={`col1-${idx}`} className='flex flex-col gap-4 bg-gray-100/50 px-6 py-8 rounded-lg min-h-60'>
                                        <div className='text-5xl text-yellow-400'>"</div>
                                        <p className='text-gray-700 text-sm leading-relaxed'>{testimonial.testimonial}</p>
                                        <div className='mt-auto pt-4 border-t border-gray-200'>
                                            <h3 className='font-semibold text-(--primary-color) text-sm'>{testimonial.name}</h3>
                                            <p className='text-gray-600 text-xs'>{testimonial.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Second Column - Scroll Down (Hidden on Mobile) */}
                            <div className='hidden md:block space-y-8 animate-scroll-down hover:animation-pause' onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'} onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}>
                                {[...testimonialContent.filter((_, i) => i % 3 === 1), ...testimonialContent.filter((_, i) => i % 3 === 1)].map((testimonial, idx) => (
                                    <div key={`col2-${idx}`} className='flex flex-col gap-4 bg-gray-100/50 px-6 py-8 rounded-lg min-h-60'>
                                        <div className='text-5xl text-yellow-400'>"</div>
                                        <p className='text-gray-700 text-sm leading-relaxed'>{testimonial.testimonial}</p>
                                        <div className='mt-auto pt-4 border-t border-gray-200'>
                                            <h3 className='font-semibold text-(--primary-color) text-sm'>{testimonial.name}</h3>
                                            <p className='text-gray-600 text-xs'>{testimonial.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Third Column - Scroll Up (Hidden on Tablet and below) */}
                            <div className='hidden lg:block space-y-8 animate-scroll-up hover:animation-pause' onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'} onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}>
                                {[...testimonialContent.filter((_, i) => i % 3 === 2), ...testimonialContent.filter((_, i) => i % 3 === 2)].map((testimonial, idx) => (
                                    <div key={`col3-${idx}`} className='flex flex-col gap-4 bg-gray-100/50 px-6 py-8 rounded-lg min-h-80'>
                                        <div className='text-5xl text-yellow-400'>"</div>
                                        <p className='text-gray-700 text-sm leading-relaxed'>{testimonial.testimonial}</p>
                                        <div className='mt-auto pt-4 border-t border-gray-200'>
                                            <h3 className='font-semibold text-(--primary-color) text-sm'>{testimonial.name}</h3>
                                            <p className='text-gray-600 text-xs'>{testimonial.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className='border-none h-px bg-(--secondary-color)/60 mt-30 mb-15' />
                    <div className='flex flex-col justify-center items-center'>
                        <Title title="Clarity starts with One " title_span="Conversation" subtitle="Take the first step toward your future. Book a free consultation with our team and discover how Ink Lab can help you or your child write a story of success." align="text-center" />
                        <div className=' w-full flex flex-col md:flex-row items-center justify-center gap-6 mb-10'>
                            <button className="bg-(--secondary-color) text-white  px-6 md:px-10 py-6 rounded-full hover:bg-(--primary-color) transition duration-300 cursor-pointer">Book your Free Consultation</button>
                            <button className="bg-(--primary-color) text-white px-6 md:px-10 py-6 rounded-full hover:bg-(--secondary-color) transition duration-300 cursor-pointer">Have Questions? Contact Us</button>
                        </div>
                        <p className='text-xs text-gray-400'>No commitment required. Let's just talk about your goals.</p>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Home