import { Canvas } from '@react-three/fiber'
import StarField from "./components/StarField.jsx";
import Jupiter from "./components/Jupiter.jsx";
import Earth from "./components/Earth.jsx";
import InfoBoard from "./components/InfoBoard.jsx";
import CameraController from "./components/CameraController.jsx";
function App() {
    return (
        <div id="canvas-container">
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <StarField />
                <Jupiter />
                <Earth />
                <InfoBoard />
                <CameraController />
            </Canvas>
        </div>
    );
}

export default App;