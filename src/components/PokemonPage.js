import React, {useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage( { pokemon, setPokemon }) {
  const [search, setSearch] = useState("")

  function handleSearch(item){
    setSearch(item)
  }

  function handleNewPokemon(addedPokemon){
    setPokemon([addedPokemon, ...pokemon])
  }

  const filteredPokemon = pokemon.filter((p) => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm data={filteredPokemon} updateNewPokemon={handleNewPokemon}/>
      <br />
      <Search data={filteredPokemon} onSearch={handleSearch}/>
      <br />
      <PokemonCollection data={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
