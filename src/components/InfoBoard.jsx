// src/InfoBoard.js
import React from 'react';
import { Text } from '@react-three/drei';

const InfoBoard = () => {
    return (
        <mesh position={[0, 5, 0]}>
            <planeGeometry args={[5, 3]} />
            <meshStandardMaterial color="white" />
            <Text
                position={[0, 0, 0.1]} // Slightly in front of the plane to prevent z-fighting
                fontSize={0.5}
                color="black"
                anchorX="center"
                anchorY="middle"
            >
                Experience Info
            </Text>
        </mesh>
    );
};

export default InfoBoard;