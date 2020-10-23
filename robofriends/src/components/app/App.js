import React, { Component } from 'react';
import SearchBox from '../search-box/SearchBox';
import CardList from './../card-list/CardList';
import {robots} from './../robots';
import './App.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange= (event) => {
        this.setState({ searchfield : event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox placeholder='Seacrh robots' onSearchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    };

}

export default App;