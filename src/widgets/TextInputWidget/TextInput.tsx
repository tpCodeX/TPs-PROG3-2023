import  {FC} from "react"
interface InputTextProps {
    id?: string;
    placeholder?: string;
    handleTitle?: (title: string) => void;
  }

const TextInput:FC<InputTextProps> = ({placeholder,handleTitle}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleTitle){
      handleTitle(event.target.value); // Llama a setTitle para actualizar el estado "titulo"
    }
  };

    return <input type="text" placeholder={placeholder} onChange={handleChange}/> 

  };
export default TextInput