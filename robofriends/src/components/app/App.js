import React from 'react';
import SearchBox from '../search-box/SearchBox';
import CardList from './../card-list/CardList';
import {robots} from './../robots';

const App = () => {

    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox placeholder='Seacrh robots'/>
            <CardList robots={robots}/>
        </div>
    );
}

export default App;