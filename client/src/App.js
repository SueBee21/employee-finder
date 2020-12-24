import logo from './logo.svg';
import './App.css';
import Table from './components/table';
import Search from './components/search';
import {Component} from "react";
import api from "./utils/api";

class App extends Component {
  state = {
    employeeData: [],
    search: ""
  }
  componentDidMount(){
    api.getRandomPeople().then(response =>{
      this.setState({
        employeeData:response.data.results
      });
    });
  };
  render(){
    return (
      <div className="App">
        <Search/>
        <Table employeeData={this.state.employeeData}/>
      </div>
    );
  };

}

export default App;
