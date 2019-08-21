import React from 'react';
// import avengers from '../../src/data';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import Images from '../Compontents/Images';

function AvengersList(props) {
  return (
    <div className="characters-list-wrapper">
      {props.avengers.map(avenger => {
        return (
          <div className="character-card" key={avenger.id}>
            <img src={avenger.thumbnail} alt={avenger.name} />
            <Link to={`/avengers/${avenger.id}`}>
              <h3>{avenger.name}</h3>
              {/* <div onClick={() => routeToAvenger(props, avenger)}>
              {avenger.name} */}
              {/* </div> */}
              <Divider />
            </Link>
            <p>({avenger.nickname})</p>
          </div>
        );
      })}
    </div>
  );
}

function routeToAvenger(props, avenger) {
  props.history.push(`/avengers/${avenger.id}`);
}

export default AvengersList;
