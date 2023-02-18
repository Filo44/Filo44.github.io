import { Suspense, useEffect, useState, startTransition} from "react"
import MapAr from "./MapAr"
import { Canvas, useFrame, useLoader,useThree,extend} from '@react-three/fiber'
import { ImageLoader, TextureLoader } from 'three'
import Form from "./Form"

import { OrbitControls, Stats,Text, PerspectiveCamera} from "@react-three/drei";

function App() {
  const [stage,setStage]=useState(0)
  const [subjects,setSubjects]=useState([{},{},{},{},{}])
  const [classrooms,setClassrooms]=useState([{},{},{},{},{}])
  const [selectedDay,setSelectedDay]=useState(0)
  //JSON.parse(localStorage.getItem("classrooms"))||
  const numToDay={0:"Monday",1:"Tuesday",2:"Wednesday",3:"Thursday",4:"Friday"}

  useEffect(()=>{
    localStorage.setItem("subjects",JSON.stringify(subjects))
  },[subjects])
  useEffect(()=>{
    localStorage.setItem("classrooms",JSON.stringify(classrooms))
  },[classrooms])


  function handleChange(event,day) {
    if(event.target.className=="class"){
      setSubjects(prevFormData => {
        let prevArrC=[...prevFormData]
        let dayArr={...prevArrC[selectedDay]}
        let newDayArr={
          ...dayArr, 
          [event.target.name]:event.target.value
        }
        prevArrC[selectedDay]=newDayArr
        return prevArrC
      })
    }else{
      setClassrooms(prevFormData => {
        let prevArrC=[...prevFormData]
        let dayArr={...prevArrC[selectedDay]}
        let newDayArr={
          ...dayArr, 
          [event.target.name]:event.target.value
        }
        prevArrC[selectedDay]=newDayArr
        return prevArrC
      })
    }
    
  }
  function handleSubmit(e){
    e.preventDefault()
    startTransition(() => {
      setStage(1)
    });
  }
  function r(degrees){
    return degrees / (180/Math.PI)
  }
  // const inputs=[1,2,3,4,5,6,7,8].map((period)=>{
  //   return (
  //     <>
  //       <label htmlFor={"subject"+period}>Period {period} subject:</label>
  //       <input
  //         id={"subject"+period}
  //         type="text"
  //         name={period}
  //         value={subjects[period]}
  //         onChange={handleChange}
  //         className="class"
  //       />
  //       <label htmlFor={"classroom"+period}>Period {period} classroom(e.g S8):</label>
  //       <input
  //         id={"classroom"+period}
  //         type="text"
  //         name={period}
  //         value={classrooms[period]}
  //         onChange={handleChange}
  //         className="classroom"
  //       />
  //     </>
      
  //   )
  // })
        // <form onSubmit={handleSubmit} className="form">
        //   {inputs}
        //   <button className="form--button">Submit</button>
        // </form>
  const forms=[0,1,2,3,4].map((day)=>{
      return (
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          subjects={subjects[day]}
          classrooms={classrooms[day]}
          visible={selectedDay==day}
        />
      )
  })
  const buttons=[0,1,2,3,4].map((day)=>{
    let style= day==selectedDay ? {backgroundColor:"grey"} : {}
    return (
      <button className="dayButton" id={toString(day)} onClick={()=>setSelectedDay(day)} style={style}>{numToDay[day]}</button>
    )
  })
  return (
    <Suspense fallback={null}>
    <div className="app">
      {stage===0 && 
        <>
          {buttons}
          {forms}
          

        </>
      }
      {stage!=0 && 
      <>
        {buttons}
          <Canvas>
            <OrbitControls position={[0,3,0]}/>
            {/* <PerspectiveCamera
              makeDefault
              position={[0,0,0]}
              rotation={[0.142124,0,0]}
            /> */}
            <color args={[254,192,203]} attach="background" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <MapAr
              subjects={subjects[selectedDay]} 
              classrooms={Object.values(classrooms[selectedDay])}
              subjectToCoords={{
                "S4":[-1.65, 0.07,2.24],
                "S5":[-1.7285441830896375,0.09, 1.0440000000000005],
                "S6":[-1.8698170516352333,0.09, -0.3959999999999999],
                "S7":[-2.124108215017306,0.09, -1.644],
                "S8":[-0.8950342586706226,0.09, -1.116],
                "S9":[0.34816698453062145,0.09, -1.092],
                "S11":[0.07974853429398898,0.09, -2.676],
                "S10":[1.4642226460408274,0.09, -0.48]
              }}
              map1={useLoader(TextureLoader,"map1.png")}
              offset={[0,0,0]}
            />
            <MapAr
              subjects={subjects[selectedDay]} 
              classrooms={Object.values(classrooms[selectedDay])}
              subjectToCoords={{
                "Library":[-0.9814309120699072,0.07, 1.8480000000000008],
                "S3":[-0.7979246313489896,0.07, -0.7800000000000002],
                "S13":[-2.344620425996723,0.07, -1.68]
              }}
              map1={useLoader(TextureLoader,"map2.png")}
              offset={[0,0.3,0]}
            />
          </Canvas>
          
      </>
      }
    </div>
    </Suspense>
  )
}

export default App
