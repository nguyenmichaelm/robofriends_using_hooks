//main file that app "lives" within
import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  //hook used to connnect and get info from api
  //second argument (optional) => if the contained 
  //  items are changed then useEffect is ran again, 
  //  if [] is left blank acts similar to 
  //  componentDidMount(); 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
      .then(users => setRobots(users));
  }, []);

  //method to pass to child component to get feedback 
  //and change state from end user
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  //filters array to find end user search
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  });

  //return necessary in React
  //condition statement to make sure robot array 
  //  getting data from api
  return (!robots.length) ?
    <h1>Loading</h1> :
    (
      <div className="tc">
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        {/* Scroll Component for better UX*/}
        <Scroll>
          {/* ErrorBoundry is used to check for loading issues*/}
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
}

export default App;