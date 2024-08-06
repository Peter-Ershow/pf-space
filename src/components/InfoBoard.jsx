// Text1.jsx
import { Scroll} from "@react-three/drei";
import React from "react";
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';

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
                    <ul style={{fontSize: '3em', color: 'white' }}>
                        Hello, I am Peter
                    </ul>
                </SectionCenter>
                <SectionCenter>
                    <ul className="text-full-opacity " style={{fontSize: '1.5em', color: 'white' }}>
                        I want to tell you a little about myself, but...
                    </ul>
                </SectionCenter>
                <Section>
                    <ul className="text-full-opacity text-black">
                        The space object in front of you is Gargantua, a black hole from Interstellar movie. Name of this space object comes from
                        French Gargantua, a giant with a very large appetite in Rabelais's The Inestimable Life of Gargantua. Rabelais derived Gargantua from the Portuguese and Spanish garganta (“throat”)
                        Very similar to to photos of M87 Blackhole, by James-Webb-Telescope, this is our most approximate presentation of black holes in multidimensional view.
                        {' '}<a href="https://www.youtube.com/shorts/hQzkbStpFC0" target="_blank" rel="noopener noreferrer" className="text-blue-500">Here</a> is an interesting Short about it.
                    </ul>
                </Section>
                <SectionCenter>
                    <h1>
                    </h1>
                </SectionCenter>
                <SectionCenter>
                    <h1>
                    </h1>
                </SectionCenter>
                <Section>
                    <ul className="text-3xl sm:text-2xl text-black">
                        Now let's try to stay in pace with the accretion disk of glowing matter, which is heated to extreme temperatures as it orbits at near-light speeds! I will try to tell you my story in the meantime
                    </ul>
                </Section>
                <Section>
                    <ul className="text-3xl sm:text-2xl text-black" style={{ opacity: 1 }}>
                        <li>I have been studying Information Systems BSc at the Technical University of Munich from 2020 to 2024.</li>
                        <li>My project work was based on immersive VR studies, developing a solar system explorer called Project Water.</li>
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
                        <li>Completed courses in C++ and Blueprints for Unreal Engine. I focused on level scripting(interaction logic), animations, and sound engineering.</li>
                        <li>All projects can be found on my {' '}<a href="https://github.com/Peter-Ershow" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub Page</a>.</li>
                    </ul>
                </Section>
                <Section>
                    <h3 className="text-6xl sm:text-4xl text-black">Project Water (Working title)</h3>
                    <ul className="text-3xl sm:text-3xl text-black">
                        <li>Developed the interaction system, including sound components, fading, level starters, gravity physics, UI Interaction, grabbing logic, and game subsystem using C++ and Blueprint languages in Unreal Engine 5.</li>
                        <li>Spaceship level designed by me with Cargo assets. View project documentation <a href="/IEEE_Conference_Template.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500">here</a>.</li>
                        <li>Demo of this project can be found <a href="https://drive.google.com/file/d/1a52gmZNsy31ftbZ_zlY4dn8eGuoV5tHH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500">here</a>.</li>
                    </ul>
                    <a href="/img_1.png" target="_blank" rel="noopener noreferrer">
                        <img src="/img_1.png" alt="Project Water Screenshot" style={{ borderRadius: '15px', width: '30%', marginTop: '20px' }} />
                    </a>
                    <a href="/img_2.png" target="_blank" rel="noopener noreferrer">
                        <img src="/img_2.png" alt="Project Water Screenshot" style={{ borderRadius: '15px', width: '20%', marginTop: '20px' }} />
                    </a>
                </Section>
                <Section>
                    <h3 className="text-6xl sm:text-4xl text-black">The Unknown Project (Working title)</h3>
                    <ul className="text-3xl sm:text-3xl text-black">
                        <li>First Person View Survival Story Game</li>
                        <li>Developed the interaction system, inventory System, stackable, interactable, pickable, wearable and eatable items interfaces. Worked on doors interaction, animation blueprints and grabbing logic. Project is C++ as much as possible</li>
                        <a href="/UMLClassDiagram.png" target="_blank" rel="noopener noreferrer">
                            <img src="/UMLClassDiagram.png" alt="Project Water Screenshot" style={{ borderRadius: '15px', width: '15%', marginTop: '20px' }} />
                        </a>
                        <a href="/img_3.png" target="_blank" rel="noopener noreferrer">
                            <img src="/img_3.png" alt="Project Water Screenshot" style={{ borderRadius: '15px', width: '15%', marginTop: '20px' }} />
                        </a>
                    </ul>
                </Section>
                <Section>
                    <h3 className="text-6xl sm:text-4xl text-black">CI/CD</h3>
                    <ul className="text-3xl sm:text-2xl text-black" style={{ opacity: 1 }}>
                        <li>All of my projects are using Perforce deployment and source control integrated in the Engine</li>
                        <li>Depending on the size of the container Cooking and Packaging of projects can also be enabled for an Unreal Project. If it's a single person project or a 3JS website like this, I use GitHub Actions.</li>
                        <li>Here you can find an example history graph of one of my latest projects</li>
                    </ul>
                    <a href="/img.png" target="_blank" rel="noopener noreferrer">
                        <img src="/img.png" alt="Project Water Screenshot" style={{ borderRadius: '15px', width: '30%', marginTop: '20px' }} />
                    </a>
                </Section>
                <Section>
                    <h3 className="text-5xl sm:text-4xl text-black mt-4">Certifications:</h3>
                    <ul className="text-3xl sm:text-2xl text-black">
                        <li><a href="https://www.udemy.com/certificate/UC-8ab49b46-81ce-4144-bb59-74c19eedc626/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Unreal Engine 5 C++ Developer</a>.</li>
                        <li><a href="https://www.tutorialspoint.com/market/certificate.jsp/TP-Q1S83W7N" target="_blank" rel="noopener noreferrer" className="text-blue-500">Unreal Engine 5 Blueprints 2D RPG Platformer</a>.</li>
                    </ul>
                </Section>
                <Section>
                    <h3 className="text-6xl sm:text-4xl text-black">This page here</h3>
                    <ul className="text-3xl sm:text-2xl text-black" style={{ opacity: 1 }}>
                        <li>This website is written in React JS completely by me using animations in theatre js library</li>
                        <li>I use GitHub Actions for deployment and host it via Pages here :
                            {' '}<a href="https://github.com/Peter-Ershow/pf-space" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub Repository</a>.
                        </li>
                        <li>Thank you for being here!</li>
                    </ul>
                </Section>
                <Section>
                    <h3 className="text-5xl sm:text-4xl text-black">Contact me at: ershowpeter@gmail.com</h3>
                    <p className="text-5xl sm:text-4xl text-black mt-4">Credits:</p>
                    <ul className="text-3xl sm:text-2xl text-black">
                        <li>Thanks to <a href="https://www.solarsystemscope.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Solar System Scope</a> for fabulous star textures.</li>
                        <li>This work is based on <a href="https://sketchfab.com/3d-models/blackhole-74cbeaeae2174a218fe9455d77902b5c" target="_blank" rel="noopener noreferrer" className="text-blue-500">"Blackhole"</a> by <a href="https://sketchfab.com/rubykamen" target="_blank" rel="noopener noreferrer" className="text-blue-500">rubykamen</a> licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-500">CC-BY-4.0</a>.</li>
                    </ul>
                    <p className="text-3xl sm:text-2xl text-black mt-4">All projects listed on the page are used purely for educational purposes and were never used for commercial purposes.</p>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://www.linkedin.com/in/ershpeter" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} color="white" />
                        </a>
                        <a href="https://www.instagram.com/ershpeter" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} color="white" />
                        </a>
                        <a href="https://github.com/Peter-Ershow" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} color="white" />
                        </a>
                    </div>
                </Section>
            </div>
        </Scroll>
    );
}