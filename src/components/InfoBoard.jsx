// src/InfoBoard.js
import React, {useRef} from 'react';
import { Text } from '@react-three/drei';
import {useFrame} from "@react-three/fiber";
import './ShiningTextMaterial';

const InfoBoard = ({ position, content }) => {
    const materialRef = useRef();
    return (
        <Text
            position={position}
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
        >
            {content}
        </Text>
    );
};

export default InfoBoard;