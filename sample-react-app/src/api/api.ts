export class api {
  url = "https://rickandmortyapi.com/api/character";

  getEndpointUrl(searchText: string) {
    if (searchText) {
      return this.url + `/?name=${searchText}`;
    }

    return this.url;
  }

  async fetchCharacter(name: string) {
    const req = await fetch(this.getEndpointUrl(name));

    console.log("ENDPOINT ->", this.getEndpointUrl(name));

    const { results } = await req.json();

    return results;
  }
}
