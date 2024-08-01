import {useFrame, useThree} from '@react-three/fiber'
import {useEffect, useState} from "react";

export default function CameraRotator() {
    const { camera } = useThree();
    const [targetAngle, setTargetAngle] = useState(0);
    const [currentAngle, setCurrentAngle] = useState(0);
    const radius = 5; // Distance of the camera from the center

    const handleScroll = (event) => {
        setTargetAngle(prev => prev + event.deltaY * 0.001); // Adjust the multiplier for sensitivity
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, []);

    useFrame(() => {
        setCurrentAngle(prev => {
            const newAngle = prev + (targetAngle - prev) * 0.05;
            camera.position.x = radius * Math.sin(newAngle);
            camera.position.z = radius * Math.cos(newAngle);
            camera.lookAt(0, 0, 0);
            return newAngle;
        });
    });

    return null;

}