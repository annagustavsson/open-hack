import React, { useRef, useState } from 'react';

import { useFrame } from 'react-three-fiber';
import { softShadows, MeshWobbleMaterial } from 'drei';
import { useSpring, a } from 'react-spring/three';

const SpinningMesh = (props) => {
    const meshElement = useRef(null);

    const [expanded, setExpanded] = useState(false);

    const propsForScale = useSpring({
        scale: expanded ? [1.4, 1.4, 1.4] : [1, 1, 1]
    });

    useFrame(() => meshElement.current.rotation.x = meshElement.current.rotation.y += 0.01);

    return (
        <>
            <a.mesh 
                castShadow
                ref={meshElement} 
                position={props.position}
                onClick = {() => setExpanded(!expanded)}
                scale = {propsForScale.scale}
            >
                <boxBufferGeometry
                    attach="geometry"
                    args={props.args}
                />

                <MeshWobbleMaterial
                    attach="material"
                    color={props.color}
                    speed={props.speed}
                    factor={1}
                />
            </a.mesh>
        </>
    );
}

export default SpinningMesh;