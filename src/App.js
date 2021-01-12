import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Table from './components/table';
import Search from './components/search'
import { Component } from "react";
import api from "./utils/api";

class App extends Component {
  state = {
    employeeData: [],
    originalData: [],
    search: ""
  }
  componentDidMount() {
    api.getRandomPeople().then(response => {
      this.setState({
        employeeData: response.data.results,
        originalData: response.data.results,
      });
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    console.log(value)
    const newEmployeeData = this.state.originalData.filter(employee => {
      return employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase());

    })
    this.setState({
      employeeData: newEmployeeData
    })
  }
  handleSort = (columnName) => {
    const sortedList = this.state.employeeData.sort((a, b) => {

      return a.name[columnName].localeCompare(b.name[columnName])
    })
    this.setState({
      employeeData: sortedList
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar search={this.state.search} handleChange={this.handleChange} />
        <Table employeeData={this.state.employeeData} handleSort={this.handleSort} />
      </div>
    );
  };

}

export default App;
