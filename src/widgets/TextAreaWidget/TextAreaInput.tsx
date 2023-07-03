import {FC} from 'react'
interface TextAreaProps {
    id?:string;
    placeholder?:string;
    handleDescription?: (description: string) => void;

  }

const TextAreaWidget:FC<TextAreaProps> = ({placeholder,handleDescription})=>{  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (handleDescription){
      handleDescription(event.target.value); // Llama a setTitle para actualizar el estado "titulo"
    }
  };

    return(
        <textarea name="taskDescription" cols={30} rows={1}  onChange={handleChange} placeholder={placeholder}></textarea>
    )
}

export default TextAreaWidget;