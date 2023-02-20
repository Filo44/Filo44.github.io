function Form({subjects,classrooms,handleSubmit,handleChange,visible}){


    const inputs=[1,2,3,4,5,6,7,8].map((period)=>{
        return (
          <>
            <label htmlFor={"subject"+period}>Period {period} subject:</label>
            <select
              name={period}
              id={"classroom"+period}
              className="class"
              value={classrooms[period]}
              onChange={handleChange}
            >
              <option value="Science">Science</option>
              <option value="Maths"></option>
              <option value="English"></option>
              <option value="French"></option>
              <option value="Mandarin"></option>
              <option value="Spanish"></option>
              <option value="Individuals & Society"></option>
              <option value="PE"></option>
              <option value="Design"></option>
              <option value="Music"></option>
              <option value="Art"></option>
              <option value="Drama"></option>
            </select>
            <label htmlFor={"classroom"+period}>Period {period} classroom(e.g S8):</label>
            <select
              name={period}
              id={"classroom"+period}
              className="subject"
              value={classrooms[period]}
              onChange={handleChange}
            >
              <option value="">Free Period</option>
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
                    {inputs}
                    <button className="form--button">Submit</button>
                </form>
            }
        </>
    )
}

export default Form;