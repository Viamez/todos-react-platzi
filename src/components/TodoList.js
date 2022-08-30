import React from 'react';
import '../styles/TodoList.css';


function TodoList(props){
    const renderFunc=props.children||props.render;
    return(
        <section className='TodoList-container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchTodos.length)&&props.onEmptySearchResults(props.searchText)}
            {!props.loading && props.searchTodos.map(renderFunc)}
        </section>
    )
}

export {TodoList};