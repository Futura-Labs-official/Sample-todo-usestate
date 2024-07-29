import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { v4 as createUniqueId } from "uuid"

// Tailwindcss

const Hooks = () => {

    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("")
    
    const handleAddTodo = () => {
        if (todo === "") return toast.error("Task is required")
        if (todoList.some(element => element.task.toLowerCase() == todo.toLowerCase()))
            return toast.error("Task already exist");
        const taskObject = {
            id: createUniqueId(),
            task: todo,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        setTodoList([...todoList, taskObject])
        setTodo("")
        return toast.success("New Task added")
    }

    const handleRemove = (removeId) => {
        const result = todoList.filter((element) => {
            if (element.id != removeId) {
                return element
            }
        })
        setTodoList(result)
        return toast.success("Deleted")
    }

    return (
        <div className="flex w-screen justify-center mt-10 px-3 md:px-10">
            <div className='w-full'>
                <div className='flex justify-center'>
                    <div className='flex w-full md:w-[500px] flex-col'>
                        <input
                            type="text"
                            placeholder="Enter Task"
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                            className='p-2 border-2 border-gray-400 outline-none'
                        />
                        <button className='bg-gray-700 mt-3 p-[10px] text-white' onClick={handleAddTodo}>Create Task</button>
                    </div>
                </div>
                <div className='flex flex-row justify-center gap-3 mt-4 flex-wrap'>
                    {
                        todoList.map((element) => {
                            return (
                                <div key={element.id} className='p-3 bg-gray-700 text-white'>
                                    <p>{element.task}</p>
                                    <p className='text-[12px] mt-3'>{element.createdAt}</p>
                                    <div className='w-full'>
                                        <button onClick={() => handleRemove(element.id)} className='w-full bg-red-500 text-white mt-3 p-1'><i className='fa fa-trash cursor-pointer'/> Remove</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> 
            </div>
        </div>
    );
}

export default Hooks;
