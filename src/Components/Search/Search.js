import React, { useState } from "react";
import { Toolbar, Button, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = (props) => {
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  // console.log(filter);

  const handleSubmit = (e, filter) => {
    e.preventDefault();
    console.log(filter);
    const keyword = filter.toLowerCase();
    
    // const { id, name, sprite } = d[pokemonId];
    // return (
    //   <Grid item xs={4} key={pokemonId}>
    //     <Card onClick={() => history.push(`/${id}`)}>
    //       <CardMedia
    //         className={classes.cardMedia}
    //         image={sprite}
    //         style={{ width: "130px", height: "130px" }}
    //       />
    //       <CardContent className={classes.cardContent}>
    //         <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // );
  };

  return (
    <>
      <Toolbar>
        <div className="w-100 d-flex align-items-center justify-content-center">
          <TextField
            className="w-100"
            onChange={handleSearchChange}
            label="Search..."
            variant="standard"
          />
          <Button onClick={(e) => handleSubmit(e, filter)}>
            <SearchIcon className="" />
          </Button>
        </div>
      </Toolbar>
    </>
  );
};
export default Search;
