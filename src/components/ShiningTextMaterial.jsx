// src/ShiningTextMaterial.js
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

class ShiningTextMaterial extends THREE.ShaderMaterial {
    constructor() {
        super({
            uniforms: {
                time: { value: 0 },
                color: { value: new THREE.Color('white') },
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform vec3 color;
                varying vec2 vUv;
                
                void main() {
                    float shine = sin(vUv.x * 10.0 + time * 5.0) * 0.5 + 0.5;
                    vec3 finalColor = color * shine;
                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `,
            transparent: true,
        });
    }

    get time() {
        return this.uniforms.time.value;
    }

    set time(v) {
        this.uniforms.time.value = v;
    }
}

extend({ ShiningTextMaterial });