import React from "react";
import { useState } from "react";

  const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
    const [taskText, setTaskText] = useState('');
    const [category, setCategory] = useState(categories[1]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newTask = { id: Date.now(), text: taskText, category };
      onTaskFormSubmit(newTask);
      setTaskText('');
      setCategory(categories[0]); 
    };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => (setCategory(e.target.value))}>
          {/* render <option> elements for each category here */}
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
