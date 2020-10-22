import React from 'react';
import CardList from './../card-list/CardList';
import {robots} from './../robots';

const App = () => {

    return (
        <CardList robots={robots}/>
    );
}

export default App;