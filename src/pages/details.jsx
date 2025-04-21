import { useEffect } from "react";
import { useParams } from "react-router-dom"
import pokeApiServices from "../services/pokeApiServices";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Details = () => {
    const {store, dispatch} = useGlobalReducer()
    const params = useParams()
    console.log(params);
    const { id } = useParams() // desestructuracion del objeto useParams para extraer directamente el id
    console.log(id)



    useEffect(()=>{
        pokeApiServices.getSinglePokemon(id).then(data=> dispatch({type: 'pokemon_details', payload:data}))
    },[])


    return (
        <div>
            <h2>
                Details for {store.details?.name}
            </h2>
            <p>weight: {store.details?.weight}</p>
                {store.details?.types.map(el=><p>{el.type.name}</p>)}
        </div>
    )
}