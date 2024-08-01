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
                <InfoBoard position={[0, 5, 0]} content="Experience Info 1" />
                <InfoBoard position={[40, 5, 0]} content="Experience Info 2" />
                <InfoBoard position={[80, 5, 0]} content="Experience Info 3" />
                <CameraController />
            </Canvas>
        </div>
    );
}

export default App;