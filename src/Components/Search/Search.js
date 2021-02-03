import React, { useState } from "react";
import {
  // Grid,
  // Card,
  // CardMedia,
  // CardContent,
  // Typography,
  // CircularProgress,
  Toolbar,
  // AppBar,
  TextField,
} from "@material-ui/core";
// import { fade, makeStyles } from "@material-ui/core/styles";
// import { toFirstCharUppercase } from "./constants";
import SearchIcon from "@material-ui/icons/Search";
// import axios from "axios";

const Search = (props) => {
  // const classes = useStyles();
  // const { history } = props;
  // const [pokemonData, setPokemonData] = useState({});
  const [setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  // const getPokemonCard = (pokemonId) => {
  //   const { id, name, sprite } = pokemonData[pokemonId];
  //   return (
  //     <Grid item xs={4} key={pokemonId}>
  //       <Card onClick={() => history.push(`/${id}`)}>
  //         <CardMedia
  //           className={classes.cardMedia}
  //           image={sprite}
  //           style={{ width: "130px", height: "130px" }}
  //         />
  //         <CardContent className={classes.cardContent}>
  //           <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
  //         </CardContent>
  //       </Card>
  //     </Grid>
  //   );
  // };

  return (
    <>
      <Toolbar>
        <div className="w-100 d-flex align-items-center justify-content-center">
          <SearchIcon className="" />
          <TextField
            className="w-100"
            onChange={handleSearchChange}
            label="Search..."
            variant="standard"
          />
        </div>
      </Toolbar>
    </>
  );
};
export default Search;
