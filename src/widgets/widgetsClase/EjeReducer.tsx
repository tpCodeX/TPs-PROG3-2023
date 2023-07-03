import { useReducer } from "react";

// Definicion de los tipos 

interface State{
    count: number;

};

type Action = {type: 'Sumar'} | {type: 'Restar'};

const reducer = (state: State, action: Action ): State => {
    switch(action.type){
        case 'Sumar':
            return {count: state.count +1};
        case 'Restar':
            return {count: state.count -1}

        default:
            return state
    };
};

export const EjeReducer: React.FC = () => {
    //Estado Inicial
    const initialState: State = {count: 0}
    //usamos el reducer
    const[state, dispach] = useReducer(reducer, initialState);

    return(
        <div>
            <p>Contar: {state.count}</p>
            <button onClick={()=>dispach({type: 'Sumar'})}>+</button>
            <button onClick={()=>dispach({type: 'Restar'})}>-</button>
        </div>
    );
};

export default EjeReducer;