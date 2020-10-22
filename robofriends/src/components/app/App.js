import React, { Component } from 'react';
import SearchBox from '../search-box/SearchBox';
import CardList from './../card-list/CardList';
import {robots} from './../robots';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox placeholder='Seacrh robots'/>
                <CardList robots={this.state.robots}/>
            </div>
        );
    };

}

export default App;