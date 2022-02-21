//main file that app "lives" within
import React, { Component } from 'react';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: "",
    }
  }

  //method used to connnect and get info from api
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ robots: users }));
  }

  //method to pass to child component to get feedback 
  //and change state from end user
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  //necessary method in React
  render() {
    //deconstruct state for cleaner use
    const { robots, searchField } = this.state;
    //filters array to find end user search
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    //return necessary in React
    //condition statement to make sure robot array 
    //  getting data from api
    return (!robots.length) ?
      <h1>Loading</h1> :
      <div className="tc">
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* Scroll Component for better UX*/}
        <Scroll>
          {/* ErrorBoundry is used to check for loading issues*/}
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
  }
}

export default App;