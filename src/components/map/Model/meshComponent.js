import React, { useRef } from 'react';

import { useSpring, a } from 'react-spring/three';
import { useFrame } from 'react-three-fiber';

const MeshComponent = (props) => {
    const meshElement = useRef(null);
    useFrame(() => meshElement.current.rotation.y += 0.002);
    
    return (
        <a.mesh 
            castShadow
            ref={meshElement} 
            material={props.material}
            geometry={props.geometry} 
        />
    )
}


export default MeshComponent;