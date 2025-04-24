import React from "react";
import Task from  './Task'

function TaskList({tasks, onTaskDelete}) {
  return (
    <div className="tasks">
{      tasks.map((task)=>(
        <Task key={task.id}
        task={task} 
        onTaskDelete={onTaskDelete} 
        />))
}      
  {/* display a list of tasks using Task component */}
      
    </div>
  );
}

export default TaskList;