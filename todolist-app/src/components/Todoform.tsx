
import { useState } from "react";
import {TodoFormProps} from '../types/TodoListType'

const Todoform: React.FC<TodoFormProps> = ({ addElement }) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(title, description);
        addElement({ key: Math.random(), title: title, description: description });
    };

    return (
        <form onSubmit={formHandler}>
            <label htmlFor="title">
                Tite:
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <p />
            <label htmlFor="description">
                Description:
                <input type="text" id="description"

                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </label>
            <p />
            <button type='submit'>+ADD</button>
        </form>
    )
}

export default Todoform