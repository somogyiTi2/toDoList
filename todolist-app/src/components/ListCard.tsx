import React from 'react';
import { TodoListType } from '../types/TodoListType';
import Style from "./ListCard.module.css"

const ListCard: React.FC<{ toDoList: TodoListType[] }> = ({ toDoList }) => {
    console.log(toDoList);

    // Check if the todo list is not empty
    if (toDoList.length > 0) {
        // Use reduce to categorize todo items by category
        const categorizedItems = toDoList.reduce((accumulator: {[key: string]: TodoListType[]}, currentValue: TodoListType) => {
            const { category, ...rest } = currentValue;
            if (!accumulator[category]) {
                accumulator[category] = [];
            }
            accumulator[category].push(currentValue); // Push the entire object, not just rest
            return accumulator;
        }, {});

        console.log(categorizedItems);

        return (

            <div className={Style.row}>
                {Object.entries(categorizedItems).map(([category, items]) => (
                    <div key={category} className={Style.listCard}>
                        <h1>{category}</h1>
                        {items.map((item, index) => (
                            <div key={item.key} className={Style.element}>
                                <span>{item.key}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <hr/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        );
    }

    // If the todo list is empty, render nothing
    return null;
};

export default ListCard;
