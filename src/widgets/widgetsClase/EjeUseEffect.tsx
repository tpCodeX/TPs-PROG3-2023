import {useEffect, useState} from "react";

const EjeEffect = () => {
    const [suma, setSuma] = useState(0);

    useEffect(()=>{
        console.log("Se renderizo el user Effect")
    },[suma])

    return(
        <>
            <h2> Suma {suma}</h2>
            <button
                onClick={() => {setSuma (suma + 1)}}>
                Sumar
            </button>

        </>
    );

};