import { noticias } from "./noticias";

export default function handler(req, res){
    console.log(req.query.id);
    const encontrado = noticias.find((noticia) =>
        noticia.idnoticia.toString() === req.query.id)
    if (!encontrado) {
return res.status(404).json({error: "Oh nao a choquei ainda nao publicou essa noticia"})
    }
    
    res.status(200).json(encontrado)
}