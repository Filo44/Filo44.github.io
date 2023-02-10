import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader,useThree} from '@react-three/fiber'
import { OrbitControls, Stats, Text, } from "@react-three/drei";
import { ImageLoader, TextureLoader } from 'three'

function MapAr({subjects,classrooms}) {

    const ref = useRef()

    const something = useLoader(TextureLoader,"something.png")
    const deg2rad = degrees => degrees * (Math.PI / 180);
    useThree(({camera}) => {
      camera.rotation.set(deg2rad(-40), 0, 0);
      camera.position.set(0, 3, 4);
    });
    const textElements=subjects.map((subject)=>{
      
    })

    return (
      <>
        <mesh
          material=""
          ref={ref}
          >
          <boxGeometry args={[6,0.05,6]} />
          <meshStandardMaterial  map={something}/>
        </mesh>
        <Text
          position={[-1.7, 0.07,0.7]}
          scale={[1,1,1]}
          fontSize={0.2}
          color="black"
          >
            S5 
            Science
        </Text>
      </>
    )
  }

export default MapAr;