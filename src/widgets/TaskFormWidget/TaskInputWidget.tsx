import './TaskInputWidget.css'
import '../TextInputWidget/TextInput'
import TextInput from '../TextInputWidget/TextInput';
import TextAreaWidget from '../TextAreaWidget/TextAreaInput';
import { FC, FormEvent, useState } from 'react';
import DateInput from '../widgetsClase/InputDate';


interface TaskInputWidgetProps {
    handleTaskList: (newTask: iTask,form:HTMLFormElement) => void;
}





//  
const TaskInputWidget: FC<TaskInputWidgetProps> = ({ handleTaskList }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const handleNewTask = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = document.getElementById("taskForm") as HTMLFormElement;
        const newTask: iTask = {
            title: title,
            description: description,
            date: date,
            isCompleted: false
        }
        handleTaskList(newTask,form);
        setTitle("");
        setDescription("");
        setDate("");
    };




    return (
        <form id="taskForm" className="formContainer" onSubmit={handleNewTask}>
            <div className="titleInputContainer">
                <label htmlFor="taskTitle">Tarea</label>
                <TextInput id="taskTitle" placeholder={"Comprar Comida..."} handleTitle={setTitle} />
            </div>
            <div className="descriptionInputContainer">
                <label htmlFor="taskDescription">Descripción</label>
                <TextAreaWidget id="taskDescription" handleDescription={setDescription} />
            </div>
            <div className="dateInputContainer">
                <label htmlFor="taskDate">Fecha</label>
                <DateInput id="taskDate" minDate='2023-01-01' maxDate='2023-12-31' handleDate={setDate} />
            </div>
            <div className="createTaskButton">
                <input type="submit" value="+" />
            </div>
            <div>
            </div>
        </form>
    )
}

export default TaskInputWidget;