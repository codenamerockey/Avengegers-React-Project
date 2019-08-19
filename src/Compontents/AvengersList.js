import React from "react";
import avengers from "../../src/data";
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import Images from "../Compontents/Images";

function AvengersList() {
  return (
    <div className="characters-list-wrapper">
      {avengers.map(avenger => {
        return (
          <div className="character-card" key={avenger.id}>
            <img src={avenger.thumbnail} alt={avenger.name} />
            <Link to={`/avengers/${avenger.id}`}>
              <h3>{avenger.name}</h3>
              <Divider />
            </Link>
            <p>({avenger.nickname})</p>
          </div>
        );
      })}
    </div>
  );
}

export default AvengersList;
