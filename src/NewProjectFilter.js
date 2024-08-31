import React from "react";
import NewProject from "./NewProject";
import './NewProjectFilter.css';





function NewProjectFilter({DataBase}){
    const NewProjectArray = DataBase.map((_num, i)=>{
    return( 
            <NewProject
            key={i} 
              id={DataBase[i].id}
              Name={DataBase[i].firstname}
              Email={DataBase[i].email}
            />
          );
    })


        return(
            <div className="NewProjectFilter">
                {NewProjectArray}
            </div>
            
        );
    
}










export default NewProjectFilter;