import { useState } from "react";
import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES);   
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === 'All' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryClick={handleCategoryClick} 
      />
      <TaskList 
        tasks={filteredTasks} 
        onTaskDelete={handleTaskDelete} 
      />
      <NewTaskForm 
        categories={categories.filter(cat => cat !== 'All')} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
    </div>
  );
}

export default App;
