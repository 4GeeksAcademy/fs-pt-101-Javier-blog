import { Link } from "react-router-dom"

export const PokeCard = ({ name, url }) => {
    // let test = 'pepe es el mejor'
    // console.log(test.split(' '))
    let aux = url.split('/') //va a devolver un array rompiendo el string en cada /
    //console.table(aux)
    let id = aux[6]


    const pid = url.split('/')[6]

    return (
        <div className="col">

            <div className="card" >
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pid}.png`} alt={name} />
                <h3>{name}</h3>
                <Link className="btn btn-primary" to={'/details/' + pid}>Learn more</Link>
                <button className="btn btn-secondary">add fav</button>
            </div>
        </div>
    )
}