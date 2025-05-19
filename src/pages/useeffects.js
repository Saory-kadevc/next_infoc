import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Useeffects() {
    const [titulo, settitulo] = useState("useeffects")
    const [numero, setNumero ] = useState(0);
    setTimeout(() => {
            document.title = 'Bem vindo ao Use-Effects:${numero}'
            settitulo(mudatitulo())
        }, 3000
    )
    useEffect(()=>{
        console.log("Titulo alterado");
},[titulo])
    return <>
        <Container className="text-center">
            <h1>{titulo ===""?" Bem vindo":titulo} : {numero}</h1>
            <p> </p>
            <input type="button" onClick={()=>setNumero(SomaNumero(numero))} value={"soma numero"}></input>
        </Container>
    </>
}

function mudatitulo() {
    return  "bem vindo ao Use-Effects";
    
}
 function SomaNumero(Number) {

    Number++;
return Number;

 }