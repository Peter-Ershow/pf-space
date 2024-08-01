import React, { useEffect, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CameraController = () => {
    const { camera } = useThree();
    const [targetIndex, setTargetIndex] = useState(0);
    const [infoScrollPos, setInfoScrollPos] = useState({ 1: 0, 3: 0, 5: 0 });
    const maxInfoScroll = 100; // Maximum scroll value for the InfoBoard

    const positions = [
        new THREE.Vector3(-60, 0, 5),
        new THREE.Vector3(0, 5, 5), // Position of InfoBoard 1
        new THREE.Vector3(30, 0, 5),
        new THREE.Vector3(40, 5, 5), // Position of InfoBoard 2
        new THREE.Vector3(60, 5, 5),
        new THREE.Vector3(80, 5, 5), // Position of InfoBoard 3
    ];

    const infoBoardIndices = [1, 3, 5];

    const handleScroll = (event) => {
        if (infoBoardIndices.includes(targetIndex)) { // Check if camera is at any InfoBoard position
            if (event.deltaY > 0 && infoScrollPos[targetIndex] < maxInfoScroll) {
                setInfoScrollPos(prev => ({ ...prev, [targetIndex]: Math.min(prev[targetIndex] + 10, maxInfoScroll) }));
            } else if (event.deltaY < 0 && infoScrollPos[targetIndex] > 0) {
                setInfoScrollPos(prev => ({ ...prev, [targetIndex]: Math.max(prev[targetIndex] - 10, 0) }));
            } else if (infoScrollPos[targetIndex] === maxInfoScroll) {
                setTargetIndex(prev => (prev + 1) % positions.length);
                setInfoScrollPos(prev => ({ ...prev, [targetIndex]: 0 })); // Reset scroll position for current InfoBoard
            } else if (infoScrollPos[targetIndex] === 0 && event.deltaY < 0) {
                setTargetIndex(prev => (prev - 1 + positions.length) % positions.length);
            }
        } else {
            setTargetIndex(prev => (prev + (event.deltaY > 0 ? 1 : -1) + positions.length) % positions.length);
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, [infoScrollPos]);

    useFrame(() => {
        const targetPos = positions[targetIndex];
        camera.position.lerp(targetPos, 0.05);
        camera.lookAt(targetPos.x, targetPos.y, 0);
    });

    return null;
};

export default CameraController;