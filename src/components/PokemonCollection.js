import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( { data } ) {

  return (
    <Card.Group itemsPerRow={6}>
      {data.map((item) => 
        <PokemonCard key={item.id} pokemon={item}/>
      )}
    </Card.Group>
  );
}

export default PokemonCollection;