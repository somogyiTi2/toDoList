
import { useState } from 'react';
import Todoform from './components/Todoform';
import {TodoListType} from './types/TodoListType'
import ListCard from './components/ListCard';

function App() {
  const [toDoList, setTodoList] = useState<TodoListType[] | []>([]);

  const addElement = (newElement: any): void => {
    setTodoList((prevItems) => {
      return [...prevItems, newElement];
    });
    console.log(toDoList)
  };

  return (<>
    <Todoform addElement={addElement} />
    <ListCard toDoList={toDoList} />
    </>  
  );
}

export default App;
