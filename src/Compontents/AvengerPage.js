import React from 'react';
// import avengers from '../data';
import { Route, Link } from 'react-router-dom';
import { Divider, Button, ButtonContent } from 'semantic-ui-react';

import AvengerDetails from './AvengerDetails';
import AvengerMovies from './AvengerMovies';
import '../../src/App.css';

function AvengerPage(props) {
  // const id = props.match.params.id;
  // const avenger = avengers.find(avenger => `${avenger.id}` === id);
  const avenger = props.avengers.find(
    avenger => props.match.params.id === `${avenger.id}`
  );

  return (
    <div>
      <img className="character-image" src={avenger.img} alt={avenger.name} />
      <div className="character-info-wrapper">
        <h1>{avenger.name}</h1>
        <h4>({avenger.nickname})</h4>
        <Divider fitted />
        <br />
        <Link
          to={`/avengers/${props.match.params.id}/details`}
          className="details"
        >
          Avenger Details
        </Link>
        <Link
          to={`/avengers/${props.match.params.id}/movies`}
          className="movies"
        >
          Movies
        </Link>
        <Route
          path="/avengers/:id/details"
          render={props => <AvengerDetails details={avenger.description} />}
        />
        <Route
          path="/avengers/:id/movies"
          render={props => <AvengerMovies movies={avenger.movies} />}
        />
      </div>
    </div>
  );
}

export default AvengerPage;
