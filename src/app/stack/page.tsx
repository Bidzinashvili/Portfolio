import React from 'react';

export default function Page() {
    return (
        <div className="flex-1 h-screen overflow-scroll px-[1rem] pb-[100px] lg:pb-[50px] max-w-[900px] mx-auto">
            <div className="mt-[80px]">
                <h1 className="text-5xl font-bold text-white">Tools I Use Daily</h1>
                <p className="text-secondary mt-2">
                    A curated list of my favorite tools, frameworks, and services that power my projects.
                </p>

                {/* Frontend Section */}
                <div className="mt-10">
                    <h2 className="text-white font-semibold text-lg mb-4">Frontend Development</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Next.js */}
                        <ToolItem
                            icon="N"
                            name="Next.js"
                            description="React framework for production-grade applications"
                            tags={['React', 'SSR', 'Routing']}
                        />
                        {/* Tailwind CSS */}
                        <ToolItem
                            icon="T"
                            name="Tailwind CSS"
                            description="Utility-first CSS framework for fast UI development"
                            tags={['CSS', 'Utility-first', 'Responsive']}
                        />
                        {/* TypeScript */}
                        <ToolItem
                            icon="TS"
                            name="TypeScript"
                            description="Typed superset of JavaScript that compiles to plain JS"
                            tags={['Static Typing', 'Developer Tooling']}
                        />
                    </div>
                </div>

                {/* Backend Section */}
                <div className="mt-10">
                    <h2 className="text-white font-semibold text-lg mb-4">Backend Development</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Express.js */}
                        <ToolItem
                            icon="E"
                            name="Express.js"
                            description="Minimal and flexible Node.js web application framework"
                            tags={['Node.js', 'API', 'Routing']}
                        />
                        {/* MongoDB */}
                        <ToolItem
                            icon="M"
                            name="MongoDB"
                            description="NoSQL document database for high-volume data storage"
                            tags={['NoSQL', 'Database']}
                        />
                        {/* MySQL */}
                        <ToolItem
                            icon="MY"
                            name="MySQL"
                            description="Relational database management system"
                            tags={['SQL', 'Database']}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ToolItem({ icon, name, description, tags }: { icon: string, name: string, description: string, tags: string[] }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="h-10 w-10 rounded-md bg-[#1f1f1f] flex items-center justify-center text-white text-sm font-bold">
                {icon}
            </div>
            <div>
                <h3 className="text-white font-medium">{name}</h3>
                <p className="text-secondary text-sm">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-[#2a2a2a] text-white text-xs px-2 py-1 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
