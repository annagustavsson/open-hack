import React, { Suspense } from 'react';

import './threeTest.css';

import CityModel from '../Model/cityModel';
import { useGLTF } from '@react-three/drei/useGLTF';

import { Canvas } from 'react-three-fiber';
import { softShadows, OrbitControls } from 'drei';
softShadows();

const ThreeTest = () => {
    return (
        <>
            <Canvas 
                colorManagement
                shadowMap
                camera={{position: [15, 10, 15], fov: 50}}
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

                <pointLight position={[-10, 0, -20]} intensity={1} />
                <pointLight position={[0, -10, 0]} intensity={0.5} />

                <Suspense fallback={null}>
                    {/* <mesh 
                            receiveShadow
                            rotation={[-Math.PI / 2, 0, 0]} 
                            position={[0, -3, 0]}
                    >
                        <planeBufferGeometry 
                            attach="geometry"
                            args={[200, 200]}
                        />

                        <shadowMaterial 
                            attach="material"
                            opacity={0.3}
                        />
                    </mesh> */}

                    <CityModel />
                </Suspense>
                
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default ThreeTest;
