import React from 'react';
import Image from 'next/image';

export default function AboutMe() {
    return (
        <div className="flex-1 h-screen overflow-scroll px-[1rem] pb-[100px] lg:pb-[50px] max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-[80px]">
                {/* Left Column */}
                <div>
                    <p className="text-sm text-gray-400 mb-2">📍 Based in Georgia</p>
                    <h1 className="text-5xl font-bold text-white">About Me</h1>
                    <p className="text-secondary mt-4">
                        Hi, I'm Lasha, a software engineer based in Georgia. I specialize in creating functional, responsive websites and web applications, always staying up-to-date with new technologies to provide high-quality solutions. My goal is to deliver seamless user experiences and help businesses grow online.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {/* Background */}
                        <div className="bg-[#1f1f1f] p-4 rounded-2xl border border-neutral-800">
                            <h3 className="text-white font-semibold text-lg mb-2">📖 Background</h3>
                            <p className="text-secondary text-sm">
                                I've been involved in web development since 2020, focusing on full-stack development. I am currently pursuing a B.A.A degree.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="bg-[#1f1f1f] p-4 rounded-2xl border border-neutral-800">
                            <h3 className="text-white font-semibold text-lg mb-2">🛠 Skills</h3>
                            <p className="text-secondary text-sm">
                                Node.js, Express.js, Next.js, TypeScript, Git, Prisma, MongoDB.
                            </p>
                        </div>

                        {/* Interests */}
                        <div className="bg-[#1f1f1f] p-4 rounded-2xl border border-neutral-800">
                            <h3 className="text-white font-semibold text-lg mb-2">🔍 Interests</h3>
                            <p className="text-secondary text-sm">Exploring new tech, Web3, DevOps, and AI.</p>
                        </div>

                        {/* Hobbies */}
                        <div className="bg-[#1f1f1f] p-4 rounded-2xl border border-neutral-800">
                            <h3 className="text-white font-semibold text-lg mb-2">🎯 Hobbies</h3>
                            <p className="text-secondary text-sm">
                                Hiking, cycling, playing guitar, cooking, and traveling.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex justify-center md:justify-end">
                    <div className="rounded-2xl overflow-hidden w-[280px] h-[320px]">
                        <Image
                            src="/logo.jpeg"
                            alt="Profile Picture"
                            width={280}
                            height={320}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
