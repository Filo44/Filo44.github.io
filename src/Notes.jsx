import React, { useState, useEffect } from 'react';

function Notes({selectedDay,noteSelectedPeriod,noteSelectedSubject,clearNoteSelect}) {
    const [notes,setNotes]=useState([{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",},{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",},{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",},{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",},{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",}])
    const [subjectNotes,setSubjectNotes]=useState([
        { Science: "" , Maths: "", English: "", French: "", Mandarin: "", Spanish: "", "Individuals & Individuals Society": "", PE: "", Design: "", Music: "", Art: "", Drama: "" }
      ])
    const [goingDown,setGoingDown]=useState(false)


    useEffect(()=>{
        console.log("created")
    },[])

    function handleChange(e){
        setNotes(prevNotes=>{
            let copyOfNotes=[...prevNotes]
            copyOfNotes[selectedDay][noteSelectedPeriod]=e.target.value
            return copyOfNotes
        })
    }
    function handleSubjectChange(e){
        setSubjectNotes(prevNotes=>{
            let copyOfNotes=[...prevNotes]
            copyOfNotes[noteSelectedSubject]=e.target.value
            return copyOfNotes
        })
    }
    function handleNoteOut(){
        setGoingDown(true)
        setTimeout(()=>{
            setGoingDown(false)
            clearNoteSelect()
        },300)
    }

    const noteData=notes[selectedDay][noteSelectedPeriod]
    const subjectData=subjectNotes[noteSelectedSubject]

    return (
        <>
            {noteSelectedPeriod!=null && 
            <>
                <div className='anticlick' onClick={handleNoteOut}>
                </div>
                <div className={`notes ${goingDown?"notedown":""}`}>
                    
                    <label htmlFor='note--subject' className='note--label'>{noteSelectedSubject} notes</label>
                    <textarea
                        className='note'
                        id="note--subject"
                        name='subject'
                        onChange={handleSubjectChange}
                        value={subjectData}
                    >
                    </textarea>
                    <label htmlFor='note--period' className='note--label'>Period notes</label>
                    <textarea
                        className='note'
                        id="note--period"
                        name='period'
                        onChange={handleChange}
                        value={noteData}
                    >
                    </textarea>
                    <button className='note--closeButton' onClick={handleNoteOut}>✖</button>
                </div>
            </>
            
            
            }
        </>
        
    
    );
}

export default Notes;