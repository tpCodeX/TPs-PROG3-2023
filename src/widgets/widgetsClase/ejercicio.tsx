//baja logica para el final
//Deberas crear un componente de React con Typescript llamado ColorCharger
// que permite cambiar el color de una oracion mediante un checkbox
// El texto debera cambiar de color 
//Intentar hacerlo con 3 colores
//Git status pra ver el seguimiento de los cambios que se producen
//Git add es pargit commit -m"Props y handleEvent", git push(subir cambios)

import { useState } from "react";

const ColorChanger = () => {
    const Colors = {
        BLACK: 'black',
        YELLOW: 'yellow',
        RED: 'red',
      };
      
    const[isChecked, setIsChecked] = useState(true);
    const [currentColor, setCurrentColor] = useState(Colors.BLACK);

    const handleCheckBox = () => {
        setIsChecked(!isChecked);
        setCurrentColor((prevColor) => {
          if (prevColor === Colors.BLACK) {
            return Colors.YELLOW;
          } else if (prevColor === Colors.YELLOW) {
            return Colors.RED;
          } else {
            return Colors.BLACK;
          }
        });
      };

    const sentencesStyle = {
        color : currentColor, 
    }

    return(
        <div>
            <label>
                <input 
                type="checkbox" 
                checked={isChecked}
                onChange={handleCheckBox}
                />
                Cambiar Color
            </label>
            <p style={sentencesStyle}>Esta oracion va a cambiar de color</p>
        </div>
    );
}

export default ColorChanger