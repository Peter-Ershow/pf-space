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

    //Debugging purposes
    camPositionSpan = document.querySelector("#position");
    camLookAtSpan = document.querySelector("#lookingAt");


    const positions = [
        {
            position: new THREE.Vector3(0, 5, 5), // Header
            lookAt: new THREE.Vector3(0, 5, 0)
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
        setTargetIndex(prev => (prev + (event.deltaY > 0 ? 1 : -1) + positions.length) % positions.length);
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, [infoScrollPos]);

    useFrame(() => {
        const targetPos = positions[targetIndex];
        camera.position.lerp(targetPos.position, 0.01);
        camera.lookAt(targetPos.lookAt.x, targetPos.lookAt.y, targetPos.lookAt.z);

            camera.getWorldDirection(cameraDirection)
        cameraDirection.set(cameraDirection.x * 100, cameraDirection.y * 100, cameraDirection.z * 100)

            // update the onscreen spans with the camera's position and lookAt vectors
        camPositionSpan.innerHTML = `Position: (${camera.position.x.toFixed(1)}, ${camera.position.y.toFixed(1)}, ${camera.position.z.toFixed(1)})`
        camLookAtSpan.innerHTML = `LookAt: (${(camera.position.x + cameraDirection.x).toFixed(1)}, ${(camera.position.y + cameraDirection.y).toFixed(1)}, ${(camera.position.z + cameraDirection.z).toFixed(1)})`

    });



    return null;
};

export default CameraController;