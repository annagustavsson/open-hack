import React from "react";

import './mapController.css';
import { Canvas } from 'react-three-fiber';
import { softShadows, OrbitControls } from 'drei';
import { Html } from 'drei';
import ThreeTest from './ThreeTest/threeTest';
import ObjectModel from './ObjectModel/objectModel';

import HTMLContent from './HTMLContent/htmlContent';

const MapController = () => {
    return (
        // <ThreeTest />
        <>
            <Canvas 
                colorManagement
                camera={{position: [-5, 2, 10], fov: 60}}
            >
                {/* <Html>
                    <h1>Hej</h1>
                </Html> */}
                <HTMLContent />
            </Canvas>
        </>
    )
}

export default MapController