import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import earthTexture from '/8k_earth_daymap.jpg';


const Earth = () => {
    const texture = useLoader(THREE.TextureLoader, earthTexture);

    return (
        <mesh position={[60, 0, 0]}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};

export default Earth;