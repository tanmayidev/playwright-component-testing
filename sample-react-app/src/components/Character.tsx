import "../styles/character.css"

interface ICharacter {
    name: string;
    specie: string;
    type: string;
    gender: string;
    image: string;
}

const Character = ({ name, specie, type, gender, image }: ICharacter) => {
    // return (
    //     <div className="card">
    //         <img className="character-img" alt={`${name} character`} src={image} />

    //         <div className="details-container">
    //             <h2>{name}</h2>
    //             <p>{specie}</p>
    //             <p>{type}</p>
    //             <p>{gender}</p>
    //         </div>

    //     </div>
    // )
}

export default Character;