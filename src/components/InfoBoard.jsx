// Text1.jsx
import { Scroll} from "@react-three/drei";
import React from "react";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Section = (props) => {
    return (
        <section
            className={`h-screen flex flex-col justify-center p-10 `}
            style={{
                opacity: 0.7,
            }}
        >
            <div className="w-2x1 flex items-center justify-center">
                <div className="max-w-m w-full">
                    <div className="bg-white rounded-lg px-8 py-12">
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
            className={`h-screen flex flex-col justify-center items-center`}
            style={{
                opacity: 1,
            }}
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
                     Hi, I am Peter
                </h1>
              </SectionCenter>
              <SectionCenter>
                  <h1 className="text-full-opacity" style={{fontSize: '2em', color: 'white' }}>
                      Software Engineer
                      and Gameplay Developer
                  </h1>
              </SectionCenter>
              <SectionCenter>
                  <h1 className="text-full-opacity" style={{ fontSize: '3em', color: 'white' }}>
                      Welcome to the Stars
                  </h1>
              </SectionCenter>

              <Section>
                  <h1 className="text-full-opacity" style={{ fontSize: '3em', color: 'black' }}>Which are also my portfolio </h1>
                  <p className="text-full-opacity" style={{ fontSize: '1em', color: 'black' }}>As always, starting with scientific degree:</p>
                  <ul className="text-full-opacity" style={{ fontSize: '1em', color: 'black' }}>
                      <li>I studied Information Systems BSc at the Technical University of Munich in the years of 2020 to 2024, </li>
                      My thesis and project work were based on the immersive VR studies. During those days, I developed a solar system explorer, called Project Water, where
                      player can travel between Mars, Venus and Mercury, explore it's surface and get insights to discoveries of humanity on those planets. I will tell about the project later on the page.
                  </ul>
              </Section>
              <Section>
                  <p className="text-full-opacity" style={{ fontSize: '2em', color: 'black' }}>Experience</p>
                  <ul className="text-full-opacity" style={{ fontSize: '1em', color: 'black' }}>
                      <li>Since April 2022 working as a Java/Kotlin/React Software Engineer at Scalable Capital</li>
                  </ul>
              </Section>
              <Section>
                  <ul className="text-full-opacity" style={{ fontSize: '1.5em', color: 'black' }}>
                      <li>But this place here is my dedication to the art of game design, scripting and engineering
                      of immersive experiences for someone who is playing my games.
                      </li>
                  </ul>
              </Section>
              <Section>
                  <h3 className="text-full-opacity" style={{ fontSize: '2em', color: 'black' }}>Why are we here?</h3>
                  <ul className="text-full-opacity" style={{ fontSize: '1.2em', color: 'black' }}>
                      <li>Since age of 16 my hobby was to create levels of all kinds in Unreal Engine and Unity, show them to relatives and friends, I completed a bunch of
                          courses in C++ and Blueprints Unreal engine mainly focused on level scripting, animations and sound engineering. All those projects can be found on my GitHub page.
                          Since 2022 I am developing my own levels, which are often based on the Dungeons and Dragons campaign I run, which currently has taken 30 sessions.
                      </li>
                  </ul>
              </Section>
              <Section>
                  <h3 className="text-full-opacity" style={{ fontSize: '2em', color: 'black' }}>Why are we here?</h3>
                  <ul className="text-full-opacity" style={{ fontSize: '1.2em', color: 'black' }}>
                      <li>Since age of 16 my hobby was to create levels of all kinds in Unreal Engine and Unity, show them to relatives and friends, I completed a bunch of
                          courses in C++ and Blueprints Unreal engine mainly focused on level scripting, animations and sound engineering. All those projects can be found on my GitHub page.
                          Since 2022 I am developing my own levels, which are often based on the Dungeons and Dragons campaign I run, which currently has taken 30 sessions.
                          On this page I want to showcase two of my main projects
                      </li>
                  </ul>
              </Section>
              <Section>
                  <h3 className="text-full-opacity" style={{ fontSize: '2em', color: 'black' }}>Project Water(Working title)</h3>
                  <ul className="text-full-opacity" style={{ fontSize: '1.2em', color: 'black' }}>
                      <li>Demo of this project can be found here: {' '}
                          <a href="" target="_blank" rel="noopener noreferrer" style={{color: 'blue'}}>
                              "Project Water"
                          </a>{' '}
                          I developed the whole interaction system, including sound components, fading, level starters, gravity physics, UI Interaction,
                          grabbing logic and game subsystem. Those were implemented with help of C++ and Blueprint languages in Unreal Engine 5. The spaceship level is also designed by me with help of Cargo assets.
                          You can view the project documentation here: {' '}
                          <a href="/pf-space/IEEE_Conference_Template.pdf" target="_blank" rel="noopener noreferrer" style={{color: 'blue'}}>
                              Project Documentation (PDF)
                          </a>{' '}
                      </li>
                  </ul>
              </Section>
              <Section>
                  <h1>Contact me at: ershowpeter@gmail.com
                  <a href="https://www.linkedin.com/in/ershpeter" target="_blank" rel="noopener noreferrer">
                     <FaLinkedin size={30} color="black" />
                  </a>
                      <a href="https://www.instagram.com/ershpeter" target="_blank" rel="noopener noreferrer">
                          <FaInstagram size={30} color="black" />
                      </a>
                  </h1>
                  <p className="text-full-opacity" style={{ fontSize: '2em', color: 'black' }}>Credits:</p>
                  <ul className="text-full-opacity" style={{ fontSize: '1em', color: 'black' }}>
                      <li> Thanks https://www.solarsystemscope.com/ for Fabulous stars textures</li>
                      <li>
                          This work is based on{' '}
                          <a href="https://sketchfab.com/3d-models/blackhole-74cbeaeae2174a218fe9455d77902b5c" target="_blank" rel="noopener noreferrer">
                              "Blackhole"
                          </a>{' '}
                          by{' '}
                          <a href="https://sketchfab.com/rubykamen" target="_blank" rel="noopener noreferrer">
                              rubykamen
                          </a>{' '}
                          licensed under{'  '}
                          <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
                              CC-BY-4.0
                          </a>.
                      </li>
                  </ul>
                  <p className="text-full-opacity" style={{ fontSize: '1em', color: 'black' }}>All projects listed on the page are used purely for educational purposes and were never used for commercial use</p>
              </Section>
          </div>
      </Scroll>
    );
}

const Spacer = ({ height }) => (
    <div style={{ height }}></div>
);