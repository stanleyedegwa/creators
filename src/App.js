import React,{Component} from "react";
import NewProjectFilter from "./NewProjectFilter";
// import {DataBase} from './DataBase'
import SearchBar from "./SearchBar";
import Scroll from "./Scroll";



class App extends Component{
    constructor(){
            super()
            this.state = {
                DataBase:[],
                search:''

            }
        }
    componentDidMount(){
           fetch('https://jsonplaceholder.org/users')
            .then(response => {
            if (!response.ok) {
             throw new Error('Network response was not ok');
            }
         return response.json();
          })
           .then(users => {
           this.setState({DataBase: users});
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
        }
    onChangeSearch=(event)=>{
            this.setState({search : event.target.value});
        }
        
    
         
    render(){
        const searchFilter = this.state.DataBase.filter(data  => {

                return data.firstname.toLowerCase().includes(this.state.search.toLowerCase())
                
                  
                })
            if (this.state.DataBase.length === 0) {
                return <h1>LOADING</h1>
                
            }else{
        return(
            <div>
                <h1>ROBOFRIENDS</h1>
                <SearchBar onChangeSearch={this.onChangeSearch} />
                <Scroll>
                    <NewProjectFilter DataBase={searchFilter}/>
                </Scroll>
                
            </div>
        );}
    }
    }
        export default App;