import React, { useState } from "react";
import { Grid } from "@material-ui/core";
function Example(props) {
  console.log(props.name);
  const [name, setName] = useState(0);

  return (
    <div className="Example">
      <Grid container direction="column"
            justify="flex-end"
            alignItems="center">
          <Grid item className="demo01">
              1
          </Grid>
          <Grid item className="demo02">
              2
          </Grid>
          <Grid item className="demo03">
              3
          </Grid>
      </Grid>
    </div>
  );
}

export default Example;
