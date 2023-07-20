import React from 'react';
// import {robots} from 'robots';

const SearchBox = ({searchfield, searchChange})=>{
    return (
        <>
            <input className="pa3" type="search" placeholder='search robots' onChange={searchChange}></input>
        </>
    );
}

export default SearchBox;