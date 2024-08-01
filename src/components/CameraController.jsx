import React, { useEffect, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CameraController = () => {
    const { camera } = useThree();
    const [targetIndex, setTargetIndex] = useState(0);
    const positions = [
        new THREE.Vector3(-60, 0, 5),
        new THREE.Vector3(0, 5, 5),
        new THREE.Vector3(60, 0, 5),
    ];

    const handleScroll = (event) => {
        setTargetIndex(prev => (prev + (event.deltaY > 0 ? 1 : -1) + positions.length) % positions.length);
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, []);

    useFrame(() => {
        const targetPos = positions[targetIndex];
        camera.position.lerp(targetPos, 0.05);
        camera.lookAt(targetPos.x, targetPos.y, 0);
    });

    return null;
};

export default CameraController;