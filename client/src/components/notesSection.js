import React from "react"; 

 const NotesSection = () => {
    return (
        <div>
            <div className="note-section">
            
                <form>
                    <fieldset>
                        <label>New Note</label>
                        <input 
                        type="text" id="notes" placeholder="note" >
                        </input>
                    </fieldset>
                </form>
                
            </div>
        </div>
    )
 }

 export default NotesSection; 