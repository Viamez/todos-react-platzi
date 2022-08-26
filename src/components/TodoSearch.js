import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){
    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return(
        <input 
            className='TodoSearch' 
            placeholder="Busca tu Todo" 
            value={searchValue}
            onChange={onSearchValueChange}/>
    );
}

export {TodoSearch};