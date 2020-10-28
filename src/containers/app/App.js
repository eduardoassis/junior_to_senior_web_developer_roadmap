import React, { useState, useEffect } from 'react';
import SearchBox from '../../components/search-box/SearchBox';
import CardList from '../../components/card-list/CardList';
import './App.css';
import Scroll from '../../components/scroll/Scroll';
import ErrorBoundry from '../error-boundry/ErrorBoundry'

function App() {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    const onSearchChange= (event) => {
        setSearchfield(event.target.value);        
    }

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    }, [])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
    })
    return !robots.length ?
        (<div className='tc'><h1>Loading</h1></div>) :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox placeholder='Seacrh robots' onSearchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
}

export default App