import React, { useState } from "react";

const filter = ({handleSearch}) => {
    const[value,setValue] = useState ('')
    return (
     <div>
       <input type= "text" onchange ={(e) => setValue(e.target.value)} />
       <button onClick={()=>handleSearch(value)}> search </button>
     </div>
    )
}

export default filter