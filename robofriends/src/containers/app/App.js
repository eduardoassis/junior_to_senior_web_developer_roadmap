import React, { Component } from 'react';
import SearchBox from '../../components/search-box/SearchBox';
import CardList from '../../components/card-list/CardList';
import './App.css';
import Scroll from '../../components/scroll/Scroll';
import ErrorBoundry from '../error-boundry/ErrorBoundry'

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange= (event) => {
        this.setState({ searchfield : event.target.value});
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots : users }));
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        });
        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox placeholder='Seacrh robots' onSearchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    };

}

export default App;