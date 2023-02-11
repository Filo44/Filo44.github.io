import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader,useThree,extend} from '@react-three/fiber'
import { OrbitControls, Stats, Text, } from "@react-three/drei";
import { ImageLoader, TextureLoader } from 'three'

function MapAr({subjects,classrooms,subjectToCoords,map1}) {
    const ref = useRef()
    const [mapNum,setMapNum]=useState(0)

    // const [map1,map2] = useLoader(TextureLoader,["map1.png","map2.png"])
    const deg2rad = degrees => degrees * (Math.PI / 180);
    // let subjectToCoords=[{
    //   "S4":[-1.65, 0.07,2.24],
    //   "S5":[-1.7285441830896375,0.09, 1.0440000000000005],
    //   "S6":[-1.8698170516352333,0.09, -0.3959999999999999],
    //   "S7":[-2.124108215017306,0.09, -1.644],
    //   "S8":[-0.8950342586706226,0.09, -1.116],
    //   "S9":[0.34816698453062145,0.09, -1.092],
    //   "S11":[0.07974853429398898,0.09, -2.676],
    //   "S10":[1.4642226460408274,0.09, -0.48]
    // }]

    useThree(({camera}) => {
      camera.rotation.set(deg2rad(-40), 0, 0);
      camera.position.set(0, 3, 4);
    });
    
    var i=-1;
    const textElements=classrooms.map((classroom)=>{

      console.log(subjectToCoords[classroom])
      i++
      let period=Object.keys(subjects)[i]
      let posHigher=[...subjectToCoords[classroom]]
      posHigher[1]=0.27
      return (
            <>
            <Text
                key={i}
                position={posHigher}
                scale={[1,1,1]}
                fontSize={0.2}
                color="black"
              >
                {Object.values(subjects)[i]}
                {/* classroom */}
                
              </Text>
              <Text
                key={i}
                position={subjectToCoords[classroom]}
                scale={[1,1,1]}
                fontSize={0.2}
                color="black"
              >
                {`Period ${period}| ${ Math.floor(((period*50)+(period<4?475:495))/60)+":"+Math.floor(((period*50)+(period<4?475:495))%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`}
                {/* classroom */}
                
            </Text>
            </>
      )
    })

    return (
      <>
        <mesh
          material=""
          ref={ref}
          >
          <boxGeometry args={[6,0.05,6]} />
          <meshStandardMaterial  map={map1}/>
        </mesh>
        {textElements}
        {/* <Text
          position={[0, 0,0]}
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