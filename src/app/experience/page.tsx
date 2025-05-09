import React from 'react'

export default function page() {
    return (
        <div className='flex-1 h-screen overflow-scroll px-[1rem] pb-[100px] lg:pb-[50px] max-w-[900px] mx-auto'>
            <h1 className='mt-[80px] text-white text-5xl font-bold'>Experience</h1>
            <p className='text-secondary mt-[10px]'>A summary of my professional work history, technologies I&apos;ve used, and key achievements.</p>

            <div className='mt-[30px]'>
                <h2 className='text-white font-bold text-[18px]'>Dealin</h2>
                <p className='text-secondary mt-[8px]'>Front-End Engineer, December 2024 – Present</p>
                <p className='text-secondary mt-[8px]'>As a Front-End Engineer at Dealin, I play an active role in shaping the user interface and experience of key web products. My day-to-day responsibilities include:</p>

                <ul className="list-disc pl-6 mt-[8px] gap-[8px] flex flex-col">
                    <li className='text-secondary'>
                        <span className='font-bold'>UI Development:</span> Crafting responsive and performant user interfaces using <span className='text-white'>React.js</span> and modern styling techniques.
                    </li>
                    <li className='text-secondary'>
                        <span className='font-bold'>Team Collaboration:</span> Partnering with designers, product managers, and backend engineers to deliver cohesive, end-to-end features.
                    </li>
                    <li className='text-secondary'>
                        <span className='font-bold'>Code Quality:</span> Writing clean, maintainable code and participating in code reviews to ensure engineering standards are met.
                    </li>
                </ul>
            </div>


            <div className='mt-[30px]'>
                <h2 className='text-white font-bold text-[18px]'>Sprenty</h2>
                <p className='text-secondary mt-[8px]'>Front-end Engineer, Jul 2022 - Dec 2022 </p>
                <p className='text-secondary mt-[8px]'>Working as a Front-End Engineer, contributing to the development and maintenance of web applications. Key responsibilities include:</p>

                <ul className="list-disc pl-6 mt-[8px] gap-[8px] flex flex-col">
                    <li className='text-secondary'>
                        <span className='font-bold'>Front-End Development:</span> Working with modern web technologies like <span className='text-white'>React.js</span> to build and maintain scalable applications.
                    </li>
                    <li className='text-secondary'>
                        <span className='font-bold'>Collaboration:</span> Working closely with the development team to implement new features and improve existing functionality.
                    </li>
                    <li className='text-secondary'>
                        <span className='font-bold'>Learning & Growth:</span> Actively learning and applying new technologies and best practices in a professional environment.
                    </li>
                </ul>
            </div>

            <div className='mt-[30px]'>
                <h2 className='text-white font-bold text-[18px]'>Outplay</h2>
                <p className='text-secondary mt-[8px]'>Back-end Engineer, Jan 2022 - Jul 2022 </p>
                <p className='text-secondary mt-[8px]'>I developed a backend for a social network using a microservices architecture. The system was designed to support scalable and efficient handling of user data, providing a robust platform for social interactions, with features such as messaging, user profiles, and real-time notifications.</p>

                <ul className="list-disc pl-6 mt-[8px] gap-[8px] flex flex-col">
                    <li className='text-secondary'>
                        <span className='font-bold'>Back-end Development:</span> Key technologies and tools used include: <span className='text-white'>Express.js</span> and <span className='text-white'>MySQL</span>.
                    </li>
                    <li className='text-secondary'>
                        <span className='font-bold'>Authentication:</span> Created a custom authentication system using SMS and Email Verification.
                    </li>
                </ul>
            </div>
        </div>
    )
}
