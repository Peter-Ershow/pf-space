import {Canvas, useFrame, useThree} from '@react-three/fiber'
import StarField from "./components/StarField.jsx";
import Jupiter from "./components/Jupiter.jsx";
import CameraController from "./components/CameraController.jsx";
import {Blackhole} from "./components/Blackhole.jsx";
import './index.css';
import {FlyControls, OrbitControls} from "@react-three/drei";

function App() {
    return (
        <div id="canvas-container">
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <StarField />
                <OrbitControls />
                <Blackhole />
                <CameraController />
            </Canvas>
        </div>
    );
}

export default App;