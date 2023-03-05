import React from 'react'
import { nanoid } from 'nanoid'

function Form({subjects,classrooms,handleSubmit,handleChange,visible}){
    const inputs=[1,2,3,4,5,6,7,8].map((period)=>{
        return (
          <>
            <label key={nanoid()} htmlFor={"subject"+period}>{period}</label>
            <select
              key={nanoid()}
              name={period}
              id={"classroom"+period}
              className="class"
              value={subjects[period]}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="Science">Science</option>
              <option value="Maths">Maths</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Mandarin">Mandarin</option>
              <option value="Spanish">Spanish</option>
              <option value="Individuals &Individuals Society"></option>
              <option value="PE">PE</option>
              <option value="Design">Design</option>
              <option value="Music">Music</option>
              <option value="Art">Art</option>
              <option value="Drama">Drama</option>
            </select>
            <select
              key={nanoid()}
              name={period}
              id={"classroom"+period}
              className="subject"
              value={classrooms[period]}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="S4">S4</option>
              <option value="S5">S5</option>
              <option value="S6">S6</option>
              <option value="S7">S7</option>
              <option value="S8">S8</option>
              <option value="S9">S9</option>
              <option value="S10">S10</option>
              <option value="S11">S11</option>
              <option value="Library">Library</option>
              <option value="S3">S3</option>
              <option value="S13">S13</option>
              <option value="J1">J1</option>
              <option value="J2">J2</option>
              <option value="J3">J3</option>
              <option value="J4">J4</option>
              <option value="J5">J5</option>
              <option value="Technology">Technology</option>
              <option value="Music">Music</option>
              <option value="Art">Art</option>
              <option value="Hall">Hall</option>
            </select>
          </>
        )
      })
    return(
        <>
            {visible &&
                <form onSubmit={handleSubmit} className="form">
                    <div>Periods</div>
                    <div>Subject</div>
                    <div>Classroom</div>
                    {inputs}
                    <button className="form--button">Submit</button>
                </form>
            }
        </>
    )
}

export default Form;