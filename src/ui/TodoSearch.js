import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}){
    const onSearchValueChange=(event)=>{
        setSearchValue(event.target.value);
    };
    return(
        <input 
            className='TodoSearch' 
            placeholder="Busca tu Todo" 
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={!!loading}
            />
    );
}

export {TodoSearch};