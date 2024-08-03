import {Canvas, useFrame, useThree} from '@react-three/fiber'
import StarField from "./components/StarField.jsx";
import './index.css';
import { ScrollControls, useScroll } from "@react-three/drei";
import {getProject, types, val} from "@theatre/core";
import {
    SheetProvider,
    PerspectiveCamera,
    useCurrentSheet, editable,
} from "@theatre/r3f";
import {Blackhole} from "./components/Blackhole.jsx";
import {useEffect} from "react";
import InfoBoard from "./components/InfoBoard.jsx";
import flyThroughState from "./Fltheatre-project-state.json"
import {Bloom, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";

export default function App() {
    const sheet = getProject("Fly Through", {state: flyThroughState}).sheet("Scene");
    return (
        <Canvas gl={{ preserveDrawingBuffer: true }}>
            <ScrollControls pages={16}>
                <SheetProvider sheet={sheet}>
                    <Scene />
                </SheetProvider>
                <InfoBoard />
            </ScrollControls>
            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                <Noise opacity={0.02} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
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

    return (
        <>
            <StarField />
            <editable.group
                theatreKey="Black Hole"
                additionalProps={{
                    timeScale: types.number(0.5, {
                        nudgeMultiplier: 0.1,
                    }),
                }}
            >
                <Blackhole/>
            </editable.group>
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