import { useState } from "react"

interface ISearchField {
    executeSearch: (text: string) => Promise<void>;
}

const SearchField = ({ executeSearch }: ISearchField) => {
    // const [searchText, setSearchText] = useState<string>('');

    // return (
    //     <form onSubmit={(e) => {
    //         executeSearch(searchText);
    //         e.preventDefault();
    //     }}>
    //         <input
    //             value={searchText}
    //             onChange={(e) => {
    //                 setSearchText(e.target.value);
    //                 e.preventDefault();
    //             }}
    //             className="character-input"
    //             id="search-field"
    //             placeholder="Type in character name"
    //         />

    //         <button
    //             disabled={searchText.length <= 2}
    //             id="find"
    //             onClick={() => executeSearch(searchText)}
    //         >
    //             Find Character
    //         </button>
    //     </form>
    // )
}

export default SearchField;