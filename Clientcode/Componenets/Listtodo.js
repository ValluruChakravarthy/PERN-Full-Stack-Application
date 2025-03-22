import React, { useEffect, useState } from 'react';
import EditTodo from './edittodo';

const Listtodo = () => {
    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localheist:10000/todos/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.log(err.message);
        }
    };

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhesit:1000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl p-6'>
                <h2 className='text-2xl font-semibold text-center text-gray-700 mb-4'>Todo List</h2>
                <table className="w-full table-auto border-collapse text-sm ">
                    <thead className='bg-blue-500 text-white text-sm'>
                        <tr>
                            <th className='py-1 px-4 border-b text-center w-3/4'>Description</th>
                            <th className='py-1 px-4 border-b text-center w-1/4'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => (
                            <tr key={todo.todo_id} className="border-b text-center">
                                <td className="py-2 px-4">{todo.description}</td>
                                <td className="py-2 px-4">
                                    <div className="flex justify-center space-x-2">
                                        <button className="bg-blue-500 text-white py-1 px-4 rounded shadow-md hover:bg-blue-600 transition-all">
                                          <EditTodo todo={todo}/>
                                        </button>
                                        <button
                                            className="bg-red-600 text-white py-1 px-4 rounded shadow-md hover:bg-red-700 transition-all"
                                            onClick={() => deleteTodo(todo.todo_id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Listtodo;
