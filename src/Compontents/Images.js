import React from "react";
import { Grid } from "semantic-ui-react";

function Images() {
  return (
    <Grid>
      <div>
        <div className="ui three column grid">
          <div className="column">
            <div className="ui segment">
              <img src="https://picsum.photos/id/237/200/300" alt="dogs" />
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <img src="https://picsum.photos/id/237/200/300" alt="dogs" />
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <img src="https://picsum.photos/id/237/200/300" alt="dogs" />
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default Images;
