import React from "react";
import './NewProject.css';






function NewProject({id,Name,Email}){
    return(
    <div className="cardDisplay">
        <img src={`https://robohash.org/102.90.48.15.png ${id}?size=200x200 `}  alt="robo "/>
            <div>
                <h2>{Name}</h2>
                <p>{Email}</p>
            </div>
    </div>

    );
}







export default NewProject ;