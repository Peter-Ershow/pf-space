// Text1.jsx
import { Scroll} from "@react-three/drei";
import React from "react";
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import DriveVideoViewer from "./DriveVideoViewer.jsx";

const Section = (props) => {
    return (
        <section
            className={`flex flex-col justify-center w-half mt-16`}>
            <div className="items-center justify-center">
                <div className="max-w-m w-full">
                    <div className="bg-white rounded-r-lg px-8 py-12 leading-relaxed">
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
            className={`w-full flex flex-col justify-center items-center mt-16`}
        >
            {props.children}
        </section>
    );
};

export default function InfoBoard () {
    return (
        <Scroll html>
            <div className={'mt-16'}>
                <SectionCenter>
                    <ul style={{fontSize: '3em', color: 'white' }}>
                        Hello, I am Peter
                    </ul>
                </SectionCenter>
                <SectionCenter>
                    <h1>
                    </h1>
                </SectionCenter>
                <SectionCenter>
                    <h1>
                    </h1>
                </SectionCenter>
                <Section>
                    <ul className="text-4xl sm:text-4xl text-white">
                        <h2 className="text-6xl sm:text-4xl text-purple">Programmer Portfolio</h2>
                        <li>This place here is dedicated to the art of game design, scripting, and engineering of immersive experiences for players.</li>
                        <li>I am looking for a professional engagement in top-tier game development or software engineering. Looking for C++ or Blueprint Developer positions in gameplay programming, scripting or other programming positions.</li>
                        <li>I want to share my passion in creating emotions and feelings for people around me, no matter which world it is, virtual with good old PC games, or real, with some long DND nights.</li>
                    </ul>
                </Section>
                <Section>
                    <h2 className="text-6xl sm:text-4xl text-purple">Why are we here?</h2>
                    <ul className="text-3xl sm:text-2xl text-white">
                        <li>Since age 16, my hobby has been creating levels of all kinds, learn the coding languages by game programming (yes, I even did Java FX) and run my board games as if I was implementing it</li>
                    </ul>
                    <h2 className="text-6xl sm:text-4xl text-purple  mt-4">Game Dev</h2>
                    <ul className="text-3xl sm:text-2xl text-white">
                        <h4 className="text-6xl sm:text-4xl text-purple"> Virtual Reality </h4>
                        <li>Have done two major projects in VR, with focus on C++ code. Currently doing a top-down RPG situated around my DND campaigns best puzzles and moments</li>
                        <h4 className="text-6xl sm:text-4xl text-purple"> Owned Projects </h4>
                        <li>Completed multiple courses and projects in C++ and Blueprints for Unreal Engine. I focused on level scripting(interaction logic), animations, and sound engineering.</li>
                        <li>All projects can be found on my {' '}<a href="https://github.com/Peter-Ershow" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub Page</a></li>
                        <h4 className="text-6xl sm:text-4xl text-purple"> Research </h4>
                        <li>Conducted a game project in 2024 that included different hints mechanics, based on the given human sense(Visual, Auditory, Haptic). Ran a research and a survey on 40 people</li>
                    </ul>
                </Section>
                <SectionCenter>
                    <h1>
                    </h1>
                </SectionCenter>
                <Section>
                    <h3 className="text-6xl sm:text-4xl text-purple">Project Water (Working title)</h3>
                    <ul className="text-3xl sm:text-3xl text-white">
                        <li>Developed the interaction system, including sound components, fading, level starters, gravity physics, UI Interaction, grabbing logic, and game subsystem using C++ and Blueprint languages in Unreal Engine 5.</li>
                        <li>Spaceship level designed by me with Cargo assets. View project documentation <a href="/IEEE_Conference_Template.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500">here</a>.</li>
                        <li><DriveVideoViewer fileId="1a52gmZNsy31ftbZ_zlY4dn8eGuoV5tHH" /> </li>
                        <li></li>
                        <li>This project included a lot of Blueprint code to maintain ease of understanding for another user of the project. It was completely migrated to C++.</li>
                        <li>
                         The game was furthermore developed into my <a href="/Bachelor_Thesis__Ershov%20.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500">thesis at TUM</a>..
                            Here you can find a game demo captured on Meta Quest Pro. Compared to the first video, it includes more game mechanics, differentiated based on the hint group. It furthermore includes assemble puzzle and gravity related effects.
                            The implementation and structure of it is described below.
                            <DriveVideoViewer fileId={"1zzZdDhrOOYaSoKhH55WhckeHPjQeBUrg"}/>
                        </li>
                    </ul>
                    <a>
                        <img src="/img_1.png" alt="Project Water Screenshot" style={{ borderRadius: '15px', width: '100%', marginTop: '20px' }} />
                    </a>

                </Section>
                <SectionCenter>
                    <h1>
                    </h1>
                </SectionCenter>
                <Section>
                    <h2 className="text-6xl sm:text-4xl text-purple" >Game Puzzle Systems</h2>

                    <ul className="text-3xl sm:text-3xl text-white puzzle-list">
                        <li>
                            <strong className={"text-purple"}>Generic Puzzle Subsystem:</strong><br />
                            Developed a generic puzzle subsystem with multiple parameters, aimed at creating a logical path between steps in the puzzle.
                        </li>
                    </ul>

                    <h2 className="text-6xl sm:text-4xl text-purple">Puzzle Workflow Example</h2>

                    <ul className="text-3xl sm:text-3xl text-white puzzle-list text-purple">
                        <li>
                            <strong>Puzzle Interaction Flow:</strong>

                            <ul className="text-3xl sm:text-3xl text-white puzzle-list">
                                <li>
                                    <strong className={"text-purple"}>Object Interaction:</strong><br />
                                    The player picks up an object and places it in the correct bucket.
                                </li>
                                <li>
                                    <strong  className={"text-purple"}>Puzzle Components Interaction:</strong><br />
                                    There are two puzzle components::
                                    <ul className="text-3xl sm:text-3xl text-white puzzle-list">
                                        <li>Item Component: Responsible for triggering item connected behaviour: animations, logic</li>
                                        <li>Box Component: Verifying collision, tag of an actor, indexes and other and publishes events to Puzzle Manager</li>
                                        <li>In Project water: Events OnGrabbed and On Released. Each time object is picked, the box starts to listen to a release event with it.</li>
                                        <li>If its released, verify if it collides with the box and verify correctness - In any case stop listening until picked up again</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong  className={"text-purple"}>Triggering the Puzzle Manager:</strong><br />
                                    This event triggers the puzzle manager with multiple parameters, such as:
                                    <ul className="text-3xl sm:text-3xl text-white puzzle-list">
                                        <li>Tags of the object</li>
                                        <li>Index in the puzzle</li>
                                        <li>Other tags (e.g., Niagara index, and others)</li>
                                        <li>In Project water: Verifying tags and triggering the puzzle assembly based on it</li>
                                    </ul>
                                    The manager can afterwords trigger the aftermath logic
                                </li>

                                <li>
                                    <strong  className={"text-purple"}>Aftermath: Triggering the Assemble Components/Endgame Logic:</strong><br />
                                    This event triggers the aftermath logic with different parameters, every actor can listen to such event:
                                    <ul className="text-3xl sm:text-3xl text-white puzzle-list">
                                        <li>Generic solution</li>
                                        <li>Lightweight provided information</li>
                                        <li>In Project water: Disappearing of remaining wrong objects and animations on assembly</li>
                                    </ul>
                                </li>

                                <li>
                                    <strong  className={"text-purple"}>Puzzle Manager Responsibilities:</strong><br />
                                    The puzzle manager is responsible for:
                                    <ul className="text-3xl sm:text-3xl text-white puzzle-list">
                                        <li>Assembling the solution component</li>
                                        <li>Triggering success/failure events</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong className={"text-purple"}>Multiple Puzzle Managers:</strong><br />

                            <ul className="text-3xl sm:text-3xl text-white puzzle-list">
                                <li><strong className={"text-purple"}>Modular Puzzle Managers:</strong><br />
                                    There can be different puzzle managers responsible for different types of puzzles, such as:</li>
                                <ul className="text-3xl sm:text-3xl text-white puzzle-list">
                                    <li>Assemble puzzles</li>
                                    <li>Logical sequence puzzles</li>
                                    <li>And others</li>
                                </ul>
                            </ul>
                        </li>
                    </ul>

                    <h2 className="text-6xl sm:text-4xl text-purple">Example: Mars Puzzle</h2>

                    <ul className="text-3xl sm:text-3xl text-white puzzle-list">
                        <li>
                            <strong className={"text-purple"}>Puzzle Scenario:</strong><br />
                            In my example, I implemented an assemble puzzle focused on building an arm with a turret for a rover on Mars.
                        </li>

                        <li>
                            <strong className={"text-purple"}>Guidance Approaches:</strong><br />
                            There are three different approaches to guiding the player:
                            <ul className="text-3xl sm:text-3xl text-white puzzle-list">
                                <li><strong className={"text-purple"}>Visual:</strong> Text-based guidance.</li>
                                <li><strong className={"text-purple"}>Auditory:</strong> Narrator explanations in the background.</li>
                                <li><strong className={"text-purple"}>Haptic:</strong> Stronger haptics on wrong choices.</li>
                            </ul>
                        </li>

                        <li>
                            <strong className={"text-purple"}>Dynamic Delegates using Event-driven architecture for Interaction:</strong>
                            <ul className="text-3xl sm:text-3xl text-white puzzle-list">
                                <li>
                                    <strong className={"text-purple"}>Overlap Event Handling:</strong><br />
                                    Whenever a puzzle component overlaps with an actor, it adds a dynamic delegate to the release event on the held component. If the overlap stops, the delegate is removed (see the attached screenshot).
                                </li>

                                <li>
                                    <strong className={"text-purple"}>Tag Passing and Verification:</strong><br />
                                    The component passes its tag to the puzzle manager, which verifies if such a tag exists in the solution component.
                                </li>

                                <li>
                                    <strong className={"text-purple"}>Puzzle Completion Verification:</strong><br />
                                    The puzzle manager verifies the completed puzzle and can trigger further events based on the completion.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Section>

                <Section>
                    <h2 className="text-purple">ProjectWater - Implementation</h2>
                    <ul className="text-3xl sm:text-2xl text-white">
                        <li>
                            View the complete ProjectWater source code on GitHub:
                            <a href="https://github.com/Peter-Ershow/ProjectWater/tree/main/Source/ProjectWater" target="_blank" rel="noopener noreferrer" className="text-blue-500"> ProjectWater GitHub Repository</a>.
                        </li>
                    </ul>

                    <h3 className="text-purple mt-4 ">Components</h3>
                    <ul className="text-3xl sm:text-2xl text-white">
                        <li><strong>CPP_GravityItemComponent:</strong> Engineered to add dynamic gravity behavior to items, enabling realistic physics-based interactions. This component simulates gravitational pull, allowing objects to be influenced by nearby forces, creating a more immersive experience.</li>

                        <li><strong>CPP_PuzzleBoxComponent:</strong> Developed to manage puzzle box interactions. Detects item placements and broadcasts events when objects are correctly positioned, linking item actions with puzzle mechanics seamlessly.</li>

                        <li><strong>CPP_PuzzleItemComponent:</strong> Handles individual puzzle items by identifying them with unique tags, tracking interactions, and broadcasting events upon puzzle completion. This component ensures the smooth flow of puzzle-solving logic through tagging and event handling.</li>
                    </ul>

                    <h3 className="text-6xl sm:text-3xl text-purple mt-4">Actors</h3>
                    <ul className="text-3xl sm:text-2xl text-white leading-relaxed">
                        <li><strong>CPP_ActorToAssemble:</strong> Built as part of the puzzle assembly system, this actor dynamically scales based on timeline animations. It checks puzzle completion conditions and broadcasts success events when conditions are met, creating engaging puzzle dynamics.</li>

                        <li><strong>CPP_PuzzleManager:</strong> The main puzzle management hub I developed to handle validation and interaction tracking. This class verifies object tags, initiates success/failure triggers, and dynamically binds events as puzzle pieces are added, delivering a responsive puzzle-solving experience.</li>

                        <li><strong>CPP_Screenfade:</strong> Designed to create screen transitions with fade-in and fade-out effects. By adjusting opacity and color on a mesh overlay, it provides smooth scene changes that enhance the gameplay flow.</li>
                    </ul>

                    <h3 className="text-6xl sm:text-3xl text-purple mt-4">Game Instance</h3>
                    <ul className="text-3xl sm:text-2xl text-white">
                        <li><strong>CPP_GameInstance:</strong> Customized to manage global game states and persistent data across levels. It tracks puzzle completion, game start times, and ensures consistent state management accessible throughout all gameplay elements.</li>
                    </ul>

                    <h3 className="text-6xl sm:text-3xl text-purple mt-4">Player Structure (MVC Pattern)</h3>
                    <ul className="text-3xl sm:text-2xl text-white">
                        <li><strong>CPP_PlayerPawnController:</strong> Built as the main controller for player interactions, this class manages input and coordinates with <code>PawnModel</code> and <code>PawnView</code>. Key functions include playing audio feedback, handling item grabbing and dropping, and initiating screen fades, providing intuitive and immersive player control.</li>

                        <li><strong>CPP_PlayerPawnModel:</strong> The player’s data layer, storing state information like grabbed items and permissions. It also logs gameplay analytics, including object interaction time, and exports this data to CSV for in-depth analysis.</li>

                        <li><strong>CPP_PlayerPawnView:</strong> Developed to handle the player’s visual and audio feedback. Manages audio components (music, SFX, grab sounds) and controls screen fades for scene transitions. This class dynamically spawns <code>Screenfade</code> actors and interacts with the controller to deliver responsive player feedback.</li>
                    </ul>

                    <h3 className="text-5xl sm:text-3xl text-purple mt-4">Structure Code</h3>
                    <ul className="text-3xl sm:text-2xl text-white">
                        <li><strong>Interactable (Interface):</strong> Defined an interface to support polymorphic interactions, allowing diverse objects to respond to player actions uniformly, enhancing gameplay flexibility.</li>

                        <li><strong>EGroup (Enum):</strong> Created classifications (e.g., auditory, haptic) for organizing items or components, enhancing behavior control within the puzzle manager and other classes.</li>

                        <li><strong>CPP_UtilityFunctionLibrary:</strong> A library of reusable helper functions designed for streamlined operations across the project, promoting code reuse and consistency.</li>
                    </ul>
                </Section>
                <SectionCenter>
                    <h1>
                    </h1>
                </SectionCenter>
                <Section>
                    <h3 className="text-6xl sm:text-4xl text-purple">The Unknown Project (Working title)</h3>
                    <ul className="text-3xl sm:text-3xl text-white">
                        <li className={"text-purple"}>First Person View Survival Story Game</li>
                        <a href="https://github.com/TheUnknownTeteam/TheUnknownGame" target="_blank" rel="noopener noreferrer" className="text-blue-500"> GitHub Repository</a>.

                        <li>Developed the interaction system, inventory System, stackable, interactable, pickable, wearable and eatable items interfaces, mostly in Blueprints, but with a base in C++. Worked on doors interaction, animation blueprints and grabbing logic.</li>
                        <a>
                            <img src="/UMLClassDiagram.png" alt="Project Water Screenshot" style={{ borderRadius: '15px', width: '90%', marginTop: '20px' }} />
                        </a>
                        <a>
                            <img src="/img_3.png" alt="Project Water Screenshot" style={{ borderRadius: '15px', width: '90%', marginTop: '20px' }} />
                        </a>
                    </ul>
                </Section>
                <Section>
                    <h1 className="text-6xl sm:text-4xl text-purple">Further Enhanced Projects From Certifications and Courses</h1>
                    <h3 className="text-6xl sm:text-4xl text-purple">The Crypt Raider</h3>
                    <ul className="text-3xl sm:text-3xl text-white">
                        <li className={"text-purple"}>First Person Puzzle RPG Level</li>
                        <a href="https://github.com/Peter-Ershow/CryptRaider" target="_blank" rel="noopener noreferrer" className="text-blue-500"> GitHub Repository</a>.
                        <DriveVideoViewer fileId={"1e3ene2bGTmb9DAeSyRwj8ovkHnWp9IdL"}/>
                        <li>Pure C++ first person RPG level, uses event-driven architecture to connect puzzle parts.</li>
                        <li>Utilizes classical first person inputs and adds grabbable mechanisms to control objects.</li>
                    </ul>
                </Section>
                <Section>
                    <h3 className="text-6xl sm:text-4xl text-purple">The Obstacle Assault</h3>
                    <ul className="text-3xl sm:text-3xl text-white">
                        <li className={"text-purple"}>Third Person View Puzzle RPG Level</li>
                        <a href="https://github.com/Peter-Ershow/ObstacleAssault" target="_blank" rel="noopener noreferrer" className="text-blue-500"> GitHub Repository</a>.
                        <DriveVideoViewer fileId={"1JvxKmCTSkND5NaZA6u39iOu1yaJeUjLk"}/>
                        <li>C++ project, includes moving objects mechanics, affecting the collision of a player. In this project I wanted to research collision effects on the player</li>
                    </ul>
                </Section>

                <Section>
                    <h3 className="text-6xl sm:text-4xl text-purple">The Toon Tanks</h3>
                    <ul className="text-3xl sm:text-3xl text-white">
                        <li className={"text-purple"}>Third person Tanks Game. First Unreal C++ Project</li>
                        <a href="https://github.com/Peter-Ershow/ToonTanks" target="_blank" rel="noopener noreferrer" className="text-blue-500"> GitHub Repository</a>.
                        <DriveVideoViewer fileId={"1sskUOlVVDGBUa8OahrInm1MfyYgyY6Tl"}/>
                        <li>My first project in C++ Unreal Engine, basic Locomotion movement and Controls, ability to shoot. First experience with game state.</li>
                    </ul>
                </Section>
                <Section>
                    <h3 className="text-6xl sm:text-4xl text-purple">CI/CD</h3>
                    <ul className="text-3xl sm:text-2xl text-white" style={{ opacity: 1 }}>
                        <li>All of my projects are using Perforce deployment and source control integrated in the Engine</li>
                        <li>Depending on the size of the container Cooking and Packaging of projects can also be enabled for an Unreal Project. If it's a single person project or a 3JS website like this, I use GitHub Actions.</li>
                        <li>Here you can find an example history graph of one of my latest projects</li>
                    </ul>
                    <a>
                        <img src="/img.png" alt="CI/CD" style={{ borderRadius: '15px', width: '100%', marginTop: '20px' }} />
                    </a>
                </Section>
                <Section>
                    <h3 className="text-5xl sm:text-4xl text-purple mt-4">Certifications:</h3>
                    <ul className="text-3xl sm:text-2xl text-white">
                        <li><a href="https://www.udemy.com/certificate/UC-8ab49b46-81ce-4144-bb59-74c19eedc626/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Unreal Engine 5 C++ Developer</a>.</li>
                        <li><a href="https://www.tutorialspoint.com/market/certificate.jsp/TP-Q1S83W7N" target="_blank" rel="noopener noreferrer" className="text-blue-500">Unreal Engine 5 Blueprints 2D RPG Platformer</a>.</li>
                    </ul>
                </Section>
                <Section>
                    <h2 className="text-5xl sm:text-4xl text-purple">Other Coding Experience</h2>
                    <ul className="text-3xl sm:text-2xl text-white">
                        <li>Since April 2022, working as a Java/Kotlin/React Software Engineer at Scalable Capital</li>
                        <li>in July 2021 and until April 2022 worked as a Java Software Engineer at Software Factory</li>
                    </ul>
                    <h2 className="text-5xl sm:text-4xl text-purple">Backend Development</h2>
                    <ul className="text-3xl sm:text-2xl text-white leading-relaxed">
                        <li>Refactored a monolithic Java service into modular microservices, improving scalability and performance.</li>
                        <li>Developed Kotlin Lambda functions for automated cleanup, increasing efficiency and data integrity.</li>
                        <li>Enhanced observability through automated reporting, saving significant manual effort weekly.</li>
                        <li>Upgraded Spring Boot across multiple services for improved compatibility and performance.</li>
                        <li>Optimized entity matching, significantly reducing latency and manual processing time.</li>
                        <li>Strengthened security by eliminating SQL injection vulnerabilities and upgrading dependencies.</li>
                    </ul>

                    <h2 className="text-5xl sm:text-4xl text-purple mt-8">Frontend Development</h2>
                    <ul className="text-3xl sm:text-2xl text-white leading-relaxed">
                        <li>Improved input sanitization to eliminate XSS and CSRF vulnerabilities.</li>
                        <li>Enhanced onboarding process, reducing time-to-completion by applying user-centric design principles.</li>
                    </ul>

                    <h2 className="text-5xl sm:text-4xl text-purple mt-8">Infrastructure</h2>
                    <ul className="text-3xl sm:text-2xl text-white leading-relaxed">
                        <li>Streamlined CI/CD pipelines by migrating from Jenkins to GitHub Actions, boosting efficiency.</li>
                        <li>Configured observability for AWS Lambdas using Datadog, improving monitoring capabilities.</li>
                        <li>Enhanced inter-service security through secret management and Terraform module instrumentation.</li>
                    </ul>
                </Section>
                <Section>
                    <h3 className="text-6xl sm:text-4xl text-purple">This page here</h3>
                    <ul className="text-3xl sm:text-2xl text-white" style={{ opacity: 1 }}>
                        <li>This website is written in React JS completely by me using animations in theatre js library</li>
                        <li>I use GitHub Actions for deployment and host it via Pages here :
                            {' '}<a href="https://github.com/Peter-Ershow/pf-space" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub Repository</a>.
                        </li>
                        <li>Thank you for being here!</li>
                    </ul>
                </Section>
                <Section>
                    <h3 className="text-5xl sm:text-4xl text-purple">Contact me at: ershowpeter@gmail.com</h3>
                    <p className="text-5xl sm:text-4xl text-purple mt-4">Credits:</p>
                    <ul className="text-3xl sm:text-2xl text-white">
                        <li>Thanks to <a href="https://www.solarsystemscope.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Solar System Scope</a> for fabulous star textures.</li>
                        <li>This work is based on <a href="https://sketchfab.com/3d-models/blackhole-74cbeaeae2174a218fe9455d77902b5c" target="_blank" rel="noopener noreferrer" className="text-blue-500">"Blackhole"</a> by <a href="https://sketchfab.com/rubykamen" target="_blank" rel="noopener noreferrer" className="text-blue-500">rubykamen</a> licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-500">CC-BY-4.0</a>.</li>
                    </ul>
                    <p className="text-3xl sm:text-2xl text-white mt-4">All projects listed on the page are used purely for educational purposes and were never used for commercial purposes.</p>
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