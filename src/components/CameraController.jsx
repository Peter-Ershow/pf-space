import React, { useEffect, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3. define cameraDirection and span variables
let cameraDirection = new THREE.Vector3()
let camPositionSpan, camLookAtSpan

const CameraController = () => {
    const { camera } = useThree();
    const [targetIndex, setTargetIndex] = useState(0);
    const [infoScrollPos, setInfoScrollPos] = useState({ 1: 0, 3: 0, 5: 0 });
    const maxInfoScroll = 100; // Maximum scroll value for the InfoBoard
    const [isInterpolating, setIsInterpolating] = useState(true); // Track if the camera is interpolating


    //Debugging purposes
    camPositionSpan = document.querySelector("#position");
    camLookAtSpan = document.querySelector("#lookingAt");


    const positions = [
        {
            position: new THREE.Vector3(0, 5, 5), // Header
            lookAt: new THREE.Vector3(0, 5, -120)
        },
        {
            position: new THREE.Vector3(2.5, 0.5, 1.2),
            lookAt: new THREE.Vector3(2.3, 0.7, 0.2),
        },
        {
            position: new THREE.Vector3(-0.5, 0.4, 3.2), // Position of InfoBoard 2 Beauty
            lookAt: new THREE.Vector3(-0.5, 0.4, 0)
        },
        {
            position: new THREE.Vector3(-2.5, 0.3, -1.0),
            lookAt: new THREE.Vector3(-2.5, 0.3, 0)
        },
        {
            position: new THREE.Vector3(-4.1, 3, -2.9), // Position of InfoBoard 3
            lookAt: new THREE.Vector3(-4.1, 3, 0)
        }
    ];

    const infoBoardIndices = [1, 3, 5];

    const handleScroll = (event) => {
        setTargetIndex(prev => {
            const newIndex = prev + (event.deltaY > 0 ? 1 : -1);
            if (newIndex < 0 || newIndex >= positions.length) {
                return prev; // Do not update if out of bounds
            }
            setIsInterpolating(true); // Start interpolating to the new target position
            return newIndex;
        });
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, [infoScrollPos]);

    useFrame(() => {
        const target = positions[targetIndex];
        const currentLookAt = new THREE.Vector3();
        const targetLookAt = target.lookAt;
        if (isInterpolating) {
            // Interpolate camera position to the target
            camera.position.lerp(target.position, 0.02);

            // Create a look vector and interpolate it

            currentLookAt.lerpVectors(camera.getWorldDirection(new THREE.Vector3()).add(camera.position), targetLookAt, 0.02);
            camera.lookAt(currentLookAt);

            // Check if the camera is close enough to the target position to stop interpolating
            if (camera.position.distanceTo(target.position) < 0.1 && camera.getWorldDirection(new THREE.Vector3()).distanceTo(target.lookAt.clone().sub(camera.position).normalize()) < 0.1) {
                camera.position.copy(target.position);
                camera.lookAt(target.lookAt);
                setIsInterpolating(false); // Stop interpolating
            }
        } else {
            // Ensure the camera looks at the target when not interpolating
            camera.lookAt(target.lookAt);
        }

        camera.getWorldDirection(cameraDirection);
        cameraDirection.set(cameraDirection.x * 100, cameraDirection.y * 100, cameraDirection.z * 100);

        // Update the onscreen spans with the camera's position and lookAt vectors
        if (camPositionSpan) {
            camPositionSpan.innerHTML = `Position: (${camera.position.x.toFixed(1)}, ${camera.position.y.toFixed(1)}, ${camera.position.z.toFixed(1)})`;
        }
        if (camLookAtSpan) {
            camLookAtSpan.innerHTML = `LookAt: (${currentLookAt.x.toFixed(1)}, ${currentLookAt.y.toFixed(1)}, ${currentLookAt.z.toFixed(1)})`;
        }
    });

    return null;
};

export default CameraController;