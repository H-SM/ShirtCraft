import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const CameraRig = ({ children }) => {
    //making a new ref to make the camera closer 
    const group = useRef();
    const snap = useSnapshot(state);

    

    useFrame((state, delta) => {
        //making breakpoints - mb,lg
        const isBreakPoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;

        //setting the initial position 
        let targetPosition = [-0.4,0,2];
        if(snap.intro) {
            if(isBreakPoint) targetPosition = [0,0,2];
            if(isMobile) targetPosition = [0,0.2,2.5];
        }
        else{
            if(isMobile) targetPosition = [0,0.2,2.5];
            else targetPosition = [0,0,2];
        }

        //set camera position
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)

        //set model rotation
        easing.dampE(
            group.current.rotation,
            [state.pointer.y /10 ,-state.pointer.x /5, 0],
            0.25, delta
        )
    })
    return (
        <group ref={group}>
          {children}
        </group>
     )
}

export default CameraRig
