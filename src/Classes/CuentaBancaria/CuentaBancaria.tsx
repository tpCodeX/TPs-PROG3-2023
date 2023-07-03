import React from 'react';
import './CuentaBancaria.css'





interface CuentaProps{
    titular: string;
    numeroCuenta: number;
    saldo: number;
    cbu: number;
}




class CuentaBancaria extends React.Component{
    limiteExtraccion=100000
    limiteAsignacion=500000
    constructor(props:CuentaProps)
    super(props){
        this.props=props
    }


}


export default CuentaComp;