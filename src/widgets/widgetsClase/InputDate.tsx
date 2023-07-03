import {FC} from 'react'

interface DateInputProps{
    id?:string;
    maxDate?:string;
    minDate?:string;
    handleDate?: (date:string) => void;
}


const DateInput:FC<DateInputProps> = ({maxDate,minDate,handleDate}) => {
    
    const handleChange=((event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if(handleDate){
            handleDate(event.target.value);
        }
    })


    return(
        <input type="date" min={minDate} max={maxDate} onChange={handleChange} />
    );
}

export default DateInput