import { useState } from 'react';
import './TaskContainerComp.css'
import TaskInputComp from '../../widgets/TaskFormWidget/TaskInputWidget'
import TaskComp from '../TaskComp/TaskComp';
import { CheckBox } from '../../widgets/widgetsClase/CheckBox';

const TaskContainer = () => {

    const [tasks, setTasks] = useState<iTask[]>([]);

    const handleTaskListUpdate = (newTask: iTask,form:HTMLFormElement) => {

        if(newTask.title){
            setTasks((prevTasks) => [...prevTasks, newTask]);
            form.reset();
            console.log("-"+newTask.title+"-");
        }
        else{
            alert("La tarea debe tener,como mínimo, un título.");
            console.error("No se ha proporcionado un título a la tarea.")
        }
    };


    return (
        <div className="TasksContainer" >
            <TaskInputComp handleTaskList={handleTaskListUpdate}/>
            {tasks.map(({title,description,date},index) => (
                <div className="taskBody">
                    <TaskComp key={index} title={title} description={description} date={date} />
                </div>
            ))}
        </div>
    )
}
export default TaskContainer;

 