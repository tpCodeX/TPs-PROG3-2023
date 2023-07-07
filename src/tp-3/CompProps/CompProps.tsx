import { useReducer, useState } from "react";

interface SaludoProps{
    nombre: string;
}

export const SaludoComp:React.FC<SaludoProps>=({nombre})=>{
    return <>
            <h1>Hola, {nombre}</h1>
            </>
}

interface ObjetoProps{
    usuario:{
        nombre:string;
        edad:number;
        direccion:string;
    }
}



export const ObjetoComp:React.FC<ObjetoProps>=(prop)=>{
    return(
        <>
        <h1>Nombre Usuario</h1>
        <p>{prop.usuario.nombre}</p>
        <h1>Edad Usuario</h1>
        <p>{prop.usuario.edad}</p>
        <h1>Direccion Usuario</h1>
        <p>{prop.usuario.direccion}</p>
        </>


        )
}

/* DESCRIPCIÓN: Crea un formulario de inicio de sesión con dos campos de entrada uno
para el nombre de usuario y otro para la contraseña. Implementa un controlador de
eventos para el envío del formulario que muestre una alerta con los valores ingresados. */



export const LoginForm= ()=>{
    const [username,setUsername]=useState("");
    const [pass,setPass]=useState("");

    const hanldeSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const form = event.currentTarget;
        const inputName=form.querySelector("#user-name") as HTMLFormElement;
        const inputPass=form.querySelector("#pass") as HTMLFormElement;
        const nombre=inputName.value;
        const contra=inputPass.value;
        setUsername(nombre);
        setPass(contra);
        alert("Nombre de Usuario: " + {username} + " Contraseña: "+{pass});
    }   

    return(
        <div>
            <form onSubmit={hanldeSubmit}>
                <label htmlFor="user-name">Username:</label>
                <input id="user-name"type="text" />
                <label htmlFor="pass">Password:</label>
                <input id="pass"type="text" />
            </form>
        </div>
    )
}


/* DESCRIPCIÓN:Crea un componente de reloj que muestre la hora actual. Actualiza el
componente cada segundo utilizando setInterval para que siempre muestre la hora
actualizada. */

/* DESCRIPCIÓN:Crea una galería de imágenes. Al hacer clic en una imagen, debe
mostrarse en grande o ampliarse. */
const initialState = {
    width: '200px',
  };
  function reducer(state, action) {
    switch (action.type) {
      case 'CAMBIAR_ANCHO':
        return { ...state, width: action.payload };
    }
  }
export const GaleriaComp=()=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClick=()=>{
        dispatch({ type: 'CAMBIAR_ANCHO', payload: '300px' });
    };


    return(
        <div className="galeria">
            <img src="https://i.pravatar.cc/" 
            alt=""
            onClick={handleClick}
            style={{ width: state.width }}
            className="imagen-galeria" />
        </div>
    )
}