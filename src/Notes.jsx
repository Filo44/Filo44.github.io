import React, { useState, useEffect } from 'react';

function Notes({setNote}) {
    const [notes,setNotes]=useState([{},{},{},{},{}])
    const [noteData,setNoteData]=useState({})
    function handleChange(e){
        setNoteData(prevNoteData=>{
            return {
                ...prevNoteData,
                [e.target.name]:e.target.value
            }
        })
    }
    
    console.log(setNote)
    useEffect(()=>{
        setNote(noteData)
    },[noteData])

    return (
        <div className='notes'>
            <label htmlFor='note--subject'>Subject notes</label>
            <textarea
                className='note'
                id="note--subject"
                name='subject'
                onChange={handleChange}
                value={noteData["subject"]}
            >
            </textarea>
            <textarea
                className='note'
                id="note--period"
                name='period'
                onChange={handleChange}
                value={noteData["period"]}
            >
            </textarea>
        </div>
    
    );
}

export default Note;