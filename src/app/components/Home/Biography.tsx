import { LucideCopy } from 'lucide-react';
import React, { useState } from 'react'


export default function Biography() {

    const [emailButtonText, setEmailButtonText] = useState("Email");

    const handleEmailCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText("lashabidzinashvili07@gmail.com")
            .then(() => {
                setEmailButtonText("Copied!");
                setTimeout(() => {
                    setEmailButtonText("Email");
                }, 2000);
            })
            .catch((err) => {
                console.error("Failed to copy email: ", err);
            });
    };

    return (
        <div className="px-[1rem] max-w-[900px] mx-auto mt-[100px] flex flex-col">
            <h1 className="text-light text-[50px] font-semibold">
                Hey, I'm Lasha, <br />
                <span className="text-secondary">A Full-Stack Developer</span>
            </h1>
            <p className="text-secondary max-w-[600px] mt-[20px]">
                I’m a developer who enjoys building web applications, exploring new technologies, playing guitar, and spending time outdoors.
            </p>
            <div>
                <div className="flex items-center gap-[10px] mt-[20px]">
                    <button className="bg-button-light text-light py-2 px-5 text-[14px] rounded-md hover:opacity-[0.64] transition delay-75 ease-in-out">
                        About
                    </button>
                    <button
                        onClick={handleEmailCopy}
                        className="bg-button-dark text-light py-2 px-4 flex text-[14px] items-center gap-2 rounded-md hover:opacity-[0.64] transition delay-75 ease-in-out"
                    >
                        <LucideCopy width={13} /> {emailButtonText}
                    </button>
                </div>
            </div>
        </div>
    )
}
