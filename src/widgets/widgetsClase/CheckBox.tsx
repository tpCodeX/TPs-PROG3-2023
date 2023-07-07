import React from "react";

export interface CheckBoxProps{
    id:string;
    label?:string;
    setIsChecked:(isChecked:boolean)=>void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({setIsChecked,label,id}) => {
    
    
    const handleCheckBox = (event:React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    };

    return <>
             <input id={id} type="checkbox" onChange={handleCheckBox} />
             <label htmlFor={id}>{label}</label>
            </> 
        
};



