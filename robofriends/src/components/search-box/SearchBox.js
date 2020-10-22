import React from 'react';

const SearchBox = ({placeholder}) => {

    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'                
                type="search"
                placeholder={placeholder} />
        </div>
    );
}

export default SearchBox;