import React from "react";
import avengers from "../data";
import { Link } from "react-router-dom";
import { Divider, Button, ButtonContent } from "semantic-ui-react";
import "../../src/App.css";

function AvengerPage(props) {
  const id = props.match.params.id;
  const avenger = avengers.find(avenger => `${avenger.id}` === id);

  return (
    <div>
      <img className="character-image" src={avenger.img} alt={avenger.name} />
      <div className="character-info-wrapper">
        <h1>{avenger.name}</h1>
        <h4>({avenger.nickname})</h4>
        <Divider fitted />
        <br />
        <p>{avenger.description}</p>
        <Link to="/avengers">
          <Button
            inverted
            color="red"
            className="avengerPageButton"
            content="Avengers Page"
          />
        </Link>
      </div>
    </div>
  );
}

export default AvengerPage;
