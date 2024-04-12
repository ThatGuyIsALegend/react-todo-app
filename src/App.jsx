import React, { useState } from 'react';
import './App.css'
import { TodoItem } from './TodoItem'
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";

export function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  

  const addTodo = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Please enter both title and description');
      return;
      }
      // Add new TodoItem to the list
      setTodos([...todos, { title, description }]);
      
      // Clear input fields after adding TodoItem
      setTitle('');
      setDescription('');
  }

  const deleteTodo = (index) => {
    // Create a copy of the todos array without the deleted item
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <section className='App'>
      <h1 className='text-2xl text-center'>Todo App</h1>
      <Input 
        type="text" 
        label="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='my-3'/>
      <Textarea
        label="Description"
        placeholder="Enter your description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full"
      />
      <Button color="primary" className='my-3 w-full' onClick={addTodo}>
        Add Todo
      </Button>
      <Divider className='my-3'/>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          itemTitle={todo.title} 
          itemDescription={todo.description} 
          onDelete={() => deleteTodo(index)} />
      ))}
    </section>
  )
}
