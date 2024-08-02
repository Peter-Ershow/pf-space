import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import starTexture from '/8k_stars_milky_way.jpg'; // Ensure you have the correct path to your star texture

const StarField = () => {
    const texture = useLoader(THREE.TextureLoader, starTexture);

    return (
        <mesh>
            <sphereGeometry args={[100, 12, 8]} />
            <meshBasicMaterial
                map={texture}
                side={THREE.BackSide} // Render texture on the inside of the sphere
            />
        </mesh>
    );
};

export default StarField;