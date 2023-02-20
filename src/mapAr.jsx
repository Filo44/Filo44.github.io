import React, { useRef } from 'react'
import {useThree} from '@react-three/fiber'
import { Text } from "@react-three/drei";
// import { ImageLoader, TextureLoader } from 'three'

function MapAr({subjects,classrooms,subjectToCoords,map1,offset,angle}) {
  console.log(classrooms)
  const ref = useRef()
  // console.log(offset)
  function hasSomething(allClassrooms,mapClassrooms){ 
    for(let i=0; i<allClassrooms.length;i++){
      if(mapClassrooms.includes(allClassrooms[i])){
        return true
      }
    }
    return false
  }
  function sum(arr1,arr2){
    return arr1.map(function (num, idx) {
      return num + arr2[idx];
  })};
  const deg2rad = degrees => degrees * (Math.PI / 180);
  useThree(({camera}) => {
    // console.log(camera.rotation.x)
    camera.rotation.set(deg2rad(angle), 0, 0);
    camera.position.set(0, 3, 4);
  });
  
  var i=-1;
  const textElements=classrooms.map((classroom)=>{
    // console.log(subjectToCoords)
    if(subjectToCoords && Object.keys(subjectToCoords).includes(classroom)){
      // console.log("h2")
      // console.log(subjectToCoords[classroom])
      i++
      let period=Object.keys(subjects)[i]
      let posHigher=[...subjectToCoords[classroom]]
      posHigher[1]=0.27
      console.log(posHigher)
      return (
        <>
          <Text
              key={i}
              position={sum(posHigher,offset)}
              // position={posHigher}            
              scale={[1,1,1]}
              fontSize={0.2}
              color="black"
            >
              {Object.values(subjects)[i]}
              {/* classroom */}
              
            </Text>
            <Text
              key={i}
              position={sum(subjectToCoords[classroom],offset)}
              // position={subjectToCoords[classroom]}
              scale={[1,1,1]}
              fontSize={0.2}
              color="black"
            >
              {`Period ${period}| ${ Math.floor(((period*50)+(period<4?475:495))/60)+":"+Math.floor(((period*50)+(period<4?475:495))%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`}
              {/* classroom */}
              
          </Text>
        </>
      )
    }
  })

  return (
    <>
    {/* {
      hasSomething(classrooms,Object.keys(subjectToCoords))
      && */}
      <>
      <mesh
        material=""
        ref={ref}
        position={offset}
        >
        <boxGeometry args={[6,0.05,6]} />
        <meshStandardMaterial  map={map1}/>
      </mesh>
      {textElements}
      </>
    {/* } */}
      
    </>
  )
}

export default MapAr;