import React from 'react';

import './threeTest.css';

import { Canvas } from 'react-three-fiber';
import { softShadows, OrbitControls } from 'drei';

import SpinningMesh from './SpinningMesh/spinningMesh';
softShadows();

const ThreeTest = () => {
    return (
        <>
            <Canvas 
                colorManagement
                shadowMap
                camera={{position: [0, 0, 120], fov: 70}}
            >
                <ambientLight intensity={1} />

                <directionalLight 
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1}
                    shadow-mapSize-width = {1024}
                    shadow-mapSize-height = {1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />

                <pointLight position={[-10, 0, -20]} intensity={0.5} />
                <pointLight position={[0, -10, 0]} intensity={1.5} />

                <group>
                    <mesh 
                        receiveShadow
                        rotation={[-Math.PI / 2, 0, 0]} 
                        position={[0, -3, 0]}
                    >
                        <planeBufferGeometry 
                            attach="geometry"
                            args={[100, 100]}
                        />

                        <shadowMaterial 
                            attach="material"
                            opacity={0.2}
                        />
                    </mesh>

                    <SpinningMesh 
                        position={[0, 1, 0]} 
                        args = {[3, 2, 1]}
                        color = "#f0c900"
                        speed={0.5}
                    />

                    <SpinningMesh 
                        position={[-2, 1, -5]}
                        color = "#ffa500"
                        speed={10}
                    />

                    <SpinningMesh 
                        position={[5, 1, -2]}
                        color = "#ffa500"
                        speed={10}
                    />
                </group>

                <OrbitControls />
            </Canvas>
        </>
    );
}

export default ThreeTest;
