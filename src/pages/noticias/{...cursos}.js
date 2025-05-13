import { useRouter } from "next/router";

export default function cursos() 

    const router = useRouter()

    return <p>Post: {router.query.cursos};

    return <>
<p className="text-center">cursos</p>
<P className="text-center">
    {Array.isArray(cursos) ? (
        cursos.map((valor,indice)=>{
        <div> Vetor posição: {indice}, valor:{valor}</div>
    })): (<div className="text-center">Vetor nao carregado</div> )}
</P>

    </>