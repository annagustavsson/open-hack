import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader } from 'react-three-fiber';

import { draco } from "drei";


const ObjectModel = (props) => {
    const scene = useLoader(GLTFLoader, '../../../resources/City_miniature.glb', draco());
    
    return <primitive object={scene} dispose={null} />
}


export default ObjectModel;