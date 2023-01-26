import React, {useEffect, useState} from 'react';

import {todosService} from "../../services";
import {Todo} from "../index";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data))
    }, [])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );

}

export {Todos}