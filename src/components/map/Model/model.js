import React, { Suspense } from 'react'

import { useLoader } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei/useGLTF'
import { Canvas } from 'react-three-fiber';
import { softShadows, OrbitControls } from 'drei';

import MeshComponent from './meshComponent';
 
const Model = (props) => {
    
    return (
        <>
            <MeshComponent />
        </>
    ) 
}
 
useGLTF.preload('/City_miniature2.gltf')

export default Model;