import Title from '../components/Title'

const Book = () => {
    return (
        <div className='w-full bg-(--primary-color)/5'>
            <div className='w-full bg-(--primary-color)/5 py-16'>
                <Title title='Book a ' title_span='Consultation' subtitle="Take the first step toward your future. Fill out the form below." align='text-center' />
            </div>
            <div className='w-full bg-gray-100 py-12'>
                <div className='max-w-[90%] md:max-w-[50%] mx-auto py-8'>
                    <div className='bg-white rounded-2xl shadow-lg flex flex-col'>
                        <form className='w-full flex flex-col gap-8 px-16 py-20'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name">Name <span className='text-red-500'>*</span></label>
                                <input id="name" type="text" placeholder='Your Name' className='w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-(--secondary-color)' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="email">Email <span className='text-red-500'>*</span></label>
                                <input id="email" type="email" placeholder='Your Email' className='w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-(--secondary-color)' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="session">Session Type <span className='text-red-500'>*</span></label>
                                <select id="session" className='w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-(--secondary-color)'>
                                    <option value="" disabled selected>Select a Session Type</option>
                                    <option value="free-consultation">Free Consultation</option>
                                    <option value="pathways-purpose">Pathways to Purpose Program</option>
                                    <option value="career-guidance">Career Guidance Session</option>
                                    <option value="cv-linkedin">CV & LinkedIn Package</option>
                                    <option value="interview-prep">Interview Preparation</option>
                                    <option value="parent-consultation">Parent Consultation</option>
                                    <option value="institution-partnership">Institution Partnership</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="date">Preferred Date <span className='text-red-500'>*</span></label>
                                <input id="date" type="date" className='w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-(--secondary-color)' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="message">Additional Information <span className='text-red-500'>*</span></label>
                                <textarea id="message" placeholder='Any specific topics or questions you have?' rows='5' className='w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-(--secondary-color)'></textarea>
                            </div>
                        </form>
                        <div className='flex flex-col items-center px-14'>
                            <button type='submit' className='w-full bg-(--primary-color) text-white px-8 py-5 md:px-10 md:py-6 rounded-full hover:bg-(--secondary-color) transition duration-300 cursor-pointer mx-8 mb-8'>Book Consultation</button>
                            <div className='mb-8 flex flex-col items-center gap-2'>
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className='w-6 h-6 mx-auto mb-2' />
                                <p className='text-xs text-gray-500 text-center'>Prefer to Chat Directly? <a href="https://wa.me/1234567890" className='text-(--primary-color) hover:underline'>Click here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book
