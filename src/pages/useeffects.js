import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Useeffects() {
    const [titulo, settitulo] = useState("useeffects")
    setTimeout(() => {
            document.title = "Bem vindo ao Use-Effects"
            settitulo(mudatitulo())
        }, 3000
    )
    return <>
        <Container className="text-center">
            <h1>{titulo ===""?" Bem vindo":titulo}</h1>
            <p> </p>
        </Container>
    </>
}

function mudatitulo() {
    return  "bem vindo ao Use-Effects"
}
