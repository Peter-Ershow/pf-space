// Text1.jsx
import { Scroll} from "@react-three/drei";
import React from "react";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Section = (props) => {
    return (
        <section
            className={`h-screen flex flex-col justify-center`}>
            <div className="w-2x1 flex items-center justify-center">
                <div className="max-w-m w-full">
                    <div className="bg-white rounded-r-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
};

const SectionCenter = (props) => {
    return (
        <section
            className={`w-full h-screen flex flex-col justify-center items-center`}
        >
            {props.children}
        </section>
    );
};


export default function InfoBoard () {
    return (
        <Scroll html>
            <div>
                <SectionCenter>
                    <h1 style={{fontSize: '3em', color: 'white' }}>
                        Hello, I am Peter
                    </h1>
                </SectionCenter>
                <SectionCenter>
                    <h1 className="text-full-opacity " style={{fontSize: '2em', color: 'white' }}>
                        Software Engineer
                        and Gameplay Developer
                    </h1>
                </SectionCenter>
                <SectionCenter>
                    <h1 className="text-full-opacity" style={{ fontSize: '2em', color: 'white' }}>
                        Welcome to the Stars
                    </h1>
                </SectionCenter>
                <SectionCenter>
                    <h1>
                    </h1>
                </SectionCenter>
                <SectionCenter>
                    <h1>
                    </h1>
                </SectionCenter>
                <SectionCenter>
                    <h1 >
                    </h1>
                </SectionCenter>

                <Section>
                    <h1 className="text-6xl sm:text-4xl text-black" style={{ opacity: 1 }}>
                        Which are also my portfolio
                    </h1>
                    <p className="text-3xl sm:text-2xl text-black" style={{ opacity: 1 }}>
                        As always, starting with scientific degree:
                    </p>
                    <ul className="text-3xl sm:text-2xl text-black" style={{ opacity: 1 }}>
                        <li>I studied Information Systems BSc at the Technical University of Munich from 2020 to 2024.</li>
                        <li>My thesis and project work were based on immersive VR studies, developing a solar system explorer called Project Water.</li>
                        <li>Players can travel between Mars, Venus, and Mercury, explore their surfaces, and learn about humanity's discoveries on those planets.</li>
                        <li>More about the project later on the page.</li>
                    </ul>
                </Section>
                <Section>
                    <h2 className="text-5xl sm:text-4xl text-black">Experience</h2>
                    <ul className="text-3xl sm:text-2xl text-black">
                        <li>Since April 2022, working as a Java/Kotlin/React Software Engineer at Scalable Capital</li>
                    </ul>
                </Section>
                <Section>
                    <ul className="text-4xl sm:text-4xl text-black">
                        <li>This place is dedicated to the art of game design, scripting, and engineering of immersive experiences for players.</li>
                    </ul>
                </Section>
                <Section>
                    <h3 className="text-6xl sm:text-4xl text-black">Why are we here?</h3>
                    <ul className="text-3xl sm:text-2xl text-black">
                        <li>Since age 16, my hobby has been creating levels of all kinds in Unreal Engine and Unity.</li>
                        <li>Completed courses in C++ and Blueprints for Unreal Engine focused on level scripting, animations, and sound engineering.</li>
                        <li>All projects can be found on my GitHub page. Since 2022, developing my own levels often based on Dungeons and Dragons campaigns.</li>
                    </ul>
                </Section>
                <Section>
                    <h3 className="text-6xl sm:text-4xl text-black">Project Water (Working title)</h3>
                    <ul className="text-3xl sm:text-3xl text-black">
                        <li>Demo of this project can be found <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-500">here</a>.</li>
                        <li>Developed the interaction system, including sound components, fading, level starters, gravity physics, UI Interaction, grabbing logic, and game subsystem using C++ and Blueprint languages in Unreal Engine 5.</li>
                        <li>Spaceship level designed by me with Cargo assets. View project documentation <a href="./IEEE_Conference_Template.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500">here</a>.</li>
                    </ul>
                </Section>
                <Section>
                    <h1 className="text-5xl sm:text-4xl text-black">Contact me at: ershowpeter@gmail.com</h1>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://www.linkedin.com/in/ershpeter" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} color="white" />
                        </a>
                        <a href="https://www.instagram.com/ershpeter" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} color="white" />
                        </a>
                    </div>
                    <p className="text-5xl sm:text-4xl text-black mt-4">Credits:</p>
                    <ul className="text-3xl sm:text-2xl text-black">
                        <li>Thanks to <a href="https://www.solarsystemscope.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Solar System Scope</a> for fabulous star textures.</li>
                        <li>This work is based on <a href="https://sketchfab.com/3d-models/blackhole-74cbeaeae2174a218fe9455d77902b5c" target="_blank" rel="noopener noreferrer" className="text-blue-500">"Blackhole"</a> by <a href="https://sketchfab.com/rubykamen" target="_blank" rel="noopener noreferrer" className="text-blue-500">rubykamen</a> licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-500">CC-BY-4.0</a>.</li>
                    </ul>
                    <p className="text-3xl sm:text-2xl text-black mt-4">All projects listed on the page are used purely for educational purposes and were never used for commercial purposes.</p>
                </Section>
            </div>
        </Scroll>
    );
}