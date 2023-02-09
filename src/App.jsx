import { useState } from "react"
import MapAr from "./MapAr"
import { Canvas, useFrame } from '@react-three/fiber'

function App() {
  const [stage,setStage]=useState(0)
  const [subjects,setSubjects]=useState([])
  const [classRooms,setClassRooms]=useState([])

  
  function handleChange(event) {
    if(event.target.className=="class"){
      setSubjects(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
      })
    }else{
      setClassRooms(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
      })
    }
    
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log(classRooms)
    console.log(subjects)
    setStage(1)
  }

  const inputs=[1,2,3,4,5,6,7,8].map((period)=>{
    return (
      <>
        <label htmlFor={"subject"+period}>Period {period} subject:</label>
        <input
          id={"subject"+period}
          type="text"
          name={period}
          value={subjects[period]}
          onChange={handleChange}
          className="class"
        />
        <label htmlFor={"classroom"+period}>Period {period} classroom(e.g S8):</label>
        <input
          id={"classroom"+period}
          type="text"
          name={period}
          value={classRooms[period]}
          onChange={handleChange}
          className="classroom"
        />
      </>
      
    )
  })

  return (
    <div className="app">
      {stage===0 && 
        <form onSubmit={handleSubmit} className="form">
          {inputs}
          <button className="form--button">Submit</button>
        </form>
      }
      {stage===1 && 
        <Canvas>
          <color args={[254,192,203]} attach="background"/>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <MapAr position={[0, -1, -1]}/>
        </Canvas>
      }
    </div>
  )
}

export default App
