import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function page() {
    return (
        <div className='flex-col flex max-w-5xl mx-auto mt-[50px] mb-[100px] lg:mb-0'>
            <div className='max-w-5xl px-[20px]'>
                <h1 className='text-white font-bold text-[45px]'>Projects</h1>
                <p className='text-secondary'>Crafting memorable digital experiences.</p>
            </div>
            <div className=" mx-auto p-4 mt-[50px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <ProjectCard
                        title="Sunnyside"
                        description="Sunnyside is a vibrant agency website featuring a colorful design that highlights creativity and modern aesthetics."
                        image="projects/project-1.png"
                        url="https://sunnyside-weld.vercel.app/"
                    />
                    <ProjectCard
                        title="MinimalBlog"
                        description="MinimalBlog is a clean and modern blog website designed for sharing articles and insights with a minimalist aesthetic."
                        image="projects/project-2.jpeg"
                        url="https://minimal-blog-phi.vercel.app/"
                    />
                    <ProjectCard
                        title="Mkoia"
                        description="Mkoia is a logistics company website tailored for the building materials industry, showcasing reliable delivery solutions, material tracking features, and a strong emphasis on efficiency and trust."
                        image="projects/project-3.png"
                        url="https://mkoia.ge"
                    />
                </div>
            </div>
        </div>
    )
}
