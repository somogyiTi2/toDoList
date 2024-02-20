import React from 'react'
import { TodoListType } from '../types/TodoListType'

const ListCard:React.FC<{ toDoList: TodoListType[] | [] }> = ({ toDoList }) => {
    console.log(toDoList);
    return (
        <div>ListCard
        {toDoList.map((element)=>
        <>
        <span>{element.key}</span>
        <h1>{element.title}</h1>
        <h2>{element.description}</h2>
        </>)}</div>
    )
}

export default ListCard