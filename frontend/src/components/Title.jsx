import React from 'react'

const Title = ({ intro, title, title_span, subtitle, align }) => {
    return (
        <div className='max-w-80% mx-auto py-6 pb-10 -10'>
            <h2 className='text-sm md:text-lg text-(--secondary-color) text-center mb-4'>{intro}</h2>
            <div className='max-w-230 mx-auto'>
                <h1 className={`text-3xl md:text-5xl lg:text-6xl font-ivymode text-(--primary-color) ${align} mb-8`}>{title}<span className='text-(--secondary-color)'>{title_span}</span></h1>
                <p className={`text-sm md:text-lg ${align}`}>{subtitle}</p>
            </div>
        </div >
    )
}

export default Title
