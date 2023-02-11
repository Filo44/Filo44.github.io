import { useState } from "react";

function Form({subjects,classrooms,handleSubmit,handleChange,visible}){


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
              value={classrooms[period]}
              onChange={handleChange}
              className="classroom"
            />
          </>
        )
      })
    return(
        <>
            {visible &&
                <form onSubmit={handleSubmit} className="form">
                    {inputs}
                    <button className="form--button">Submit</button>
                </form>
            }
        </>
    )
}

export default Form;