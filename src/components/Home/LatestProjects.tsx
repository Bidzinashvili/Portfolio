import React from 'react'
import ProjectCard from '../ProjectCard'

export default function LatestProjects() {
    return (
        <div className="px-[1rem] max-w-[900px] mx-auto mt-[30px] flex flex-col">
            <p className="text-white font-medium pb-[30px]">Latest Projects</p>

            <div className="flex items-center gap-[30px] lg:items-start justify-center lg:justify-between pb-[100px] flex-col lg:flex-row">
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
            </div>
        </div>
    )
}
