import React from "react";






function SearchBar({onChangeSearch}){


    return(
        <div>
            <input type="text" placeholder="search" onChange={onChangeSearch}></input>
              
        </div>
        
    );
}












export default SearchBar;
