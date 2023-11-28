import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( { pokemon } ) {

  const { name, hp, sprites } = pokemon;
  const [isClicked, setIsClicked] = useState(true);

  function handleClick(){
    setIsClicked((isClicked) => !isClicked)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick} >
          {isClicked ? (
          <img src={sprites.front} alt={name} />
          ) : (
          <img src={sprites.back} alt={name} />
          )}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
