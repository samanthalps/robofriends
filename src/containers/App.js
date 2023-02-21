import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import '../containers/App.css';

// STATE >> props
//STATE: is simple an object - an object that describes your application
//PROPS: are simply things that come out of "STATE"


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
      return !robots.length ?
      <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filterRobots}/>
        </Scroll>
      </div>
    );
  }
}
 

/*const App = () => {
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots}/>
    </div>
  );
}*/

export default App;
