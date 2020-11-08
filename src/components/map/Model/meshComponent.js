import React from 'react';

import { useGLTF } from '@react-three/drei/useGLTF';



const MeshComponent = (props) => {
    const { nodes, materials } = useGLTF('/City_miniature2.gltf')
    
    return (
        <mesh 
            castShadow
            material={materials.Houses}
            geometry={nodes.Cylinder.geometry} 
        />
    )
}


export default MeshComponent;