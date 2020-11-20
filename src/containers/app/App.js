import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../../components/search-box/SearchBox';
import CardList from '../../components/card-list/CardList';
import './App.css';
import Scroll from '../../components/scroll/Scroll';
import ErrorBoundry from '../error-boundry/ErrorBoundry'

import { requestRobots, setSearchField } from './../../redux/actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots()
    }

    render() {
        
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        });
        return isPending ?
            <h1>Loading</h1> :
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
            );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);