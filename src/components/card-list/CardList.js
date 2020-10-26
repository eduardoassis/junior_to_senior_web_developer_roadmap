import React from 'react';
import Card from './../card/Card';


const CardList = ({robots}) => {
    const cardComponents = robots.map((user, index) =>{
        return (<Card key={robots[index].id} 
                    id={robots[index].id} 
                    name={robots[index].name}
                    email={robots[index].email}/>);
    });
    return (
        <>{cardComponents}</>
    );

}

export default CardList;