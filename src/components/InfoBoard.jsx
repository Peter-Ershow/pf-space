// Text1.jsx
import { Scroll, useScroll } from "@react-three/drei";
import React, { useState } from "react";
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

const SectionContacts = (props) => {
    return (
        <section
            className={`h-screen flex flex-auto justify-center items-center`}
            style={{
                opacity: 1,
            }}
        >
            {props.children}
        </section>
    );
};


export default function InfoBoard () {
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityThirdSection, setOpacityThirdSection] = useState(1);

    /*
    useFrame(() => {
        setOpacityFirstSection((1 - scroll.range(0, 2 / 6)) * 0.8);
        setOpacitySecondSection(scroll.curve(2 / 6, 2 / 6) * 0.8);
        setOpacityThirdSection(scroll.range(4 / 6, 2 / 6) * 0.8);
    });

     */

    return (
      <Scroll html>
          <div>
              <SectionCenter opacity={opacityFirstSection}>
                <h1 style={{fontSize: '4em', color: 'white' }}>
                     Hello, I am Peter
                </h1>
              </SectionCenter>
              <SectionCenter>
                  <h1 className="text-full-opacity" style={{ fontSize: '4em', color: 'white' }}>Welcome to the Stars </h1>
              </SectionCenter>
              <Section>
                  <h1 className="text-full-opacity" style={{fontSize: '3em', color: 'black' }}>
                      I am passionate Software Engineer
                      and Gameplay Developer
                  </h1>
              </Section>
              <Section>
                  <h1 className="text-full-opacity" style={{ fontSize: '4em', color: 'black' }}>Welcome to the Stars </h1>
                  <p className="text-full-opacity" style={{ fontSize: '2em', color: 'black' }}>Education:</p>
                  <ul className="text-full-opacity" style={{ fontSize: '2em', color: 'black' }}>
                      <li>🧑‍💻 Technical University of Munich, Bachelor's Degree in Information Systems, Thesis: Using Virtual Reality in Serious Gaming</li>
                      <li>📦 Studienkolleg bei den Universitäten des Freistaates Bayern in München</li>
                  </ul>
              </Section>
              <Spacer height="740vh" /> {/* Add a spacer of 50vh */}
              <Section>
                  <h1>Contact me at: ershoepeter@gmail.com
                  <a href="https://www.linkedin.com/in/ershpeter" target="_blank" rel="noopener noreferrer">
                     <FaLinkedin size={30} color="black" />
                  </a>
                      <a href="https://www.instagram.com/ershpeter" target="_blank" rel="noopener noreferrer">
                          <FaInstagram size={30} color="black" />
                      </a>
                  </h1>
              </Section>
          </div>
      </Scroll>
    );
}

const Spacer = ({ height }) => (
    <div style={{ height }}></div>
);