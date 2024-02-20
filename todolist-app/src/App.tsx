
import { useState } from 'react';
import Todoform from './components/Todoform';
import {TodoListType} from './types/TodoListType'

function App() {
  const [toDoList, setTodoList] = useState<TodoListType[]>([]);

  const addElement = (newElement: any): void => {
    setTodoList((prevItems) => {
      return [...prevItems, newElement];
    });
    console.log(toDoList)
  };

  return (
    <Todoform addElement={addElement} />
    
  );
}

export default App;
