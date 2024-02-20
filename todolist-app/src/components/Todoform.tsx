
import { useState } from "react";
import { TodoFormProps } from '../types/TodoListType'
import Time from "./Time";
import Style from "./Todoform.module.css"

const Todoform: React.FC<TodoFormProps> = ({ addElement }) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addElement(
            {
                key: Time().datelong + Time().todaytime + title,
                category: category,
                title: title,
                description: description
            });
    };

    return (
        <div className={Style.todoform}>
        <div className={Style.formholder}>
            <form onSubmit={formHandler}>
                <label htmlFor="category">
                    Category:
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </label>
                <p />
                <label htmlFor="title">
                    Title:
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
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <p />
                <button type='submit'>+</button>
            </form>
        </div>
    </div>
    
   
    )
}

export default Todoform