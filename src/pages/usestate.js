import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Usestat() {
const [count, setCount] = useState(0);
    return <>
    <Container className="text-center">
        <p>

        {count}

        </p>
        <button className="btn btn-secondary" onClick={async()=>{setCount(await addOne(count)); }}>Aumentar o numero</button>
    </Container>
</>
}

function addOne(count) {
    
    count++;
    return new Promise ((promessa)=>{
        setTimeout(() => {
            promessa(count)
        }, 1000);
    })

}
