import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader,useThree} from '@react-three/fiber'
import { OrbitControls, Stats, Text, } from "@react-three/drei";
import { ImageLoader, TextureLoader } from 'three'

function MapAr({subjects,classrooms}) {
    const something = useLoader(TextureLoader,"something.png")
    const deg2rad = degrees => degrees * (Math.PI / 180);
    const ref = useRef()
    const subjectToCoords={"S1":[-1.7, 0.07,0.7]}

    useThree(({camera}) => {
      camera.rotation.set(deg2rad(-40), 0, 0);
      camera.position.set(0, 3, 4);
    });
    

    const textElements=classrooms.map((classroom)=>{
      console.log(subjectToCoords[classroom])
      return <Text
                position={subjectToCoords[classroom]}
                scale={[1,1,1]}
                fontSize={0.2}
                color="black"
              >
                {classroom}
              </Text>
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
        {textElements}
        {/* <Text
          position={[-1.7, 0.07,0.7]}
          scale={[1,1,1]}
          fontSize={0.2}
          color="black"
          >
            S5 
            Science
        </Text> */}
      </>
    )
  }

export default MapAr;