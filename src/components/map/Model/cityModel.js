import React from 'react'

import { useGLTF } from '@react-three/drei/useGLTF'

import MeshComponent from './meshComponent';
 
const CityModel = (props) => {
    const { nodes, materials } = useGLTF('/City_miniature4.gltf');

    console.log(nodes)

    const objectsList = Object.keys(nodes);
    return (
        <>
            {
                objectsList.map(key => {
                    return (
                        <MeshComponent 
                            material = {nodes[key].material}
                            geometry = {nodes[key].geometry}
                        />
                    );
                })
            }
            
        </>
    ) 
}
 
useGLTF.preload('/City_miniature4.gltf')

export default CityModel;