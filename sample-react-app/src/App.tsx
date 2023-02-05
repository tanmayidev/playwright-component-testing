// import React, { useEffect } from "react";
// import "./App.css";
// import { api } from "./api/api";
// import { useState } from "react";
// import "./styles/character.css"

// interface ICharacter {
//   id: string;
//   name: string;
//   specie: string;
//   type: string;
//   gender: string;
//   image: string;
// }


// const App = () => {
//   const [characters, setCharacters] = useState([]);
//   const client = new api();

//   useEffect(() => {
//     (async () => await fetchData(""))();
//   });

//   const fetchData = async (text: string) => {
//     const characters = await client.fetchCharacter(text);
//     setCharacters(characters);
//   };

//   const executeSearch = (text: string) => fetchData(text);

//   return (
//     <div className="App">
//       <h1 className="title">Rick and Morty</h1>
//       {!characters ?
//         (<div>
//           <p>Loading Rick and Morty Characters</p>
//         </div>) :
//         (<div>
//           <SearchField executeSearch={executeSearch} />
//           <br />
//           <br />
//           <br />
//           <ul className="list">
//             {
//               characters.map((item: ICharacter) => (
//                 <li key={item.id}>
//                   <Character
//                     {...{
//                       id: item.id,
//                       name: item.name,
//                       specie: item.specie,
//                       type: item.type,
//                       gender: item.gender,
//                       image: item.image
//                     }}
//                   />
//                 </li>
//               ))
//             }
//           </ul>
//         </div>)}
//     </div>
//   );
// }

// export default App;


import React from 'react'
import './App.css';
import "./styles/character.css"
import { api } from "./api/api";

interface ICharacter {
  id: string;
  name: string;
  specie: string;
  type: string;
  gender: string;
  image: string;
}

export const Character = ({ name, specie, type, gender, image }: ICharacter) => (
  <div className="card" >
    <img className="character-img" alt={`${name} character`} src={image} />

    <div className="details-container" >
      <h2> {name} </h2>
      <p> {specie} </p>
      <p> {type} </p>
      <p> {gender} </p>
    </div>
  </div>
)

export const SearchField = ({ executeSearch }: any) => {
  const [searchText, setSearchText] = React.useState('')

  return (
    <form onSubmit={(e) => {
      executeSearch(searchText)
      e.preventDefault()
    }}>
      <input
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value)
          e.preventDefault()
        }}
        className="character-input"
        id="search-field"
        placeholder="Type in character name"
      />

      <button
        disabled={searchText.length <= 2}
        id="find"
        onClick={() => executeSearch(searchText)}>
        Find Character
      </button>
    </form>
  )
}

function App() {
  const [characters, setCharacters] = React.useState([])

  const Client = new api()

  React.useEffect(() => {
    (async () => await fetchData())()
  }, [])

  const fetchData = async (text = '') => {
    const characters = await Client.fetchCharacter(text)

    setCharacters(characters)
  }

  return (
    <div >
      <h1 className="title" > Rick and Morty </h1>

      {
        !characters ?
          <div>
            <p> Loading Rick and Morty characters </p>
          </div>
          :
          <div>
            <SearchField executeSearch={(text: string) => fetchData(text)}
            />
            <br />
            <hr />
            <br />
            <ul className="list">
              {
                characters.map((item: ICharacter) => (
                  <li key={item.id}>
                    <Character
                      {...{
                        id: item.id,
                        name: item.name,
                        specie: item.specie,
                        type: item.type,
                        gender: item.gender,
                        image: item.image
                      }}
                    />
                  </li>
                ))
              }

            </ul>
          </div>
      }

    </div>
  );
}

export default App;