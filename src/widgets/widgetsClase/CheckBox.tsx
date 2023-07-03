import React from "react";

export interface CheckBoxProps{
    id:string;
    setIsChecked:(isChecked:boolean)=>void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({setIsChecked}) => {
    
    
    const handleCheckBox = (event:React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    };

    return <input id="isCheckedBox" type="checkbox" onChange={handleCheckBox} />
        
};



