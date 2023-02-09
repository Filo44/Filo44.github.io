import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { OrbitControls, Stats, Text } from "@react-three/drei";
import { ImageLoader, TextureLoader } from 'three'

function MapAr(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    console.log(ref)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (ref.current.rotation.x += delta))
    const something = useLoader(TextureLoader,"something.png")
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <>
        <mesh
          {...props}
          material=""
          ref={ref}
          rotation={[0.4,0,0]}
          scale={clicked ? 1.5 : 1}
          onClick={(event) => click(!clicked)}
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}>
          <boxGeometry args={[6,0.05,6]} />
          <meshStandardMaterial  map={something}/>
        </mesh>
        <Text
          {...props}
          position={[0,0,0]}
          scale={[1,1,1]}
          color="black"
          >
            HELLO
        </Text>
      </>
    )
  }

export default MapAr;