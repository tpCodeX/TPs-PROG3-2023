import './TaskComp.css'
import { CheckBox } from '../../widgets/widgetsClase/CheckBox';
import { useState } from 'react';

const TaskComp=({title,description,date,id}:iTask) => {

    const[isCompleted,setIsCompleted] = useState(false);

    const handleChecked=() => {
        setIsCompleted(!isCompleted);
    };

    const completedStyle= isCompleted ? "Completed":"";
    const checkedStyle= isCompleted ? "checkeado":"";
    return (
        <>
            <div className={"taskTitle"+" " + completedStyle}>
                <h3>{title}</h3>
            </div>
            <div className={"taskDescription"+" " + completedStyle}>
                {description? <p>{description}</p> : <p>Sin descripción.</p>}
            </div>
            <div className={"taskDate"+ " " +completedStyle}>
                {date ? <p>{date}</p> : <p>Sin fecha.</p>}
            </div>
            <div className={"taskCheck"+ " " +checkedStyle}>
                <CheckBox id={id} label={isCompleted? "Completado":"Completar"} setIsChecked={handleChecked}/>
            </div>
        </>
    )
    
}

export default TaskComp;