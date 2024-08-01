// src/Jupiter.js
import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import jupiterTexture from '/8k_jupiter.jpg';

const Jupiter = () => {
    const texture = useLoader(THREE.TextureLoader, jupiterTexture);

    return (
        <mesh position={[-60, 0, 0]}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};

export default Jupiter;