import {Canvas, useFrame, useThree} from '@react-three/fiber'
import StarField from "./components/StarField.jsx";
import './index.css';
import { ScrollControls, useScroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import {
    SheetProvider,
    PerspectiveCamera,
    useCurrentSheet,
} from "@theatre/r3f";
import {Blackhole} from "./components/Blackhole.jsx";
import {useEffect} from "react";
import InfoBoard from "./components/InfoBoard.jsx";

export default function App() {
    const sheet = getProject("Fly Through").sheet("Scene");

    return (
        <Canvas gl={{ preserveDrawingBuffer: true }}>
            <ScrollControls pages={12}>
                <SheetProvider sheet={sheet}>
                    <Scene />
                </SheetProvider>
                <InfoBoard />
            </ScrollControls>
        </Canvas>
    );
}

function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const { camera, gl } = useThree();

    useEffect(() => {
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            gl.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [camera, gl]);



    // our callback will run on every animation frame
    useFrame(() => {
        // the length of our sequence
        const sequenceLength = val(sheet.sequence.pointer.length);
        // update the "position" of the playhead in the sequence, as a fraction of its whole length
        sheet.sequence.position = (scroll.offset * sequenceLength) ;
    });

    const bgColor = "#84a4f4";

    return (
        <>
            <color attach="background" args={[bgColor]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-5, 5, -5]} intensity={1.5} />
            <StarField />
            <Blackhole />
            <PerspectiveCamera
                theatreKey="Camera"
                makeDefault
                position={[0, 0, 0]}
                fov={90}
                near={0.1}
                far={70}
            />
        </>
    );
}