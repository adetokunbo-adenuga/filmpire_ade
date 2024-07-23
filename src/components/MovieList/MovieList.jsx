import React from "react";
import { Grid } from "@mui/material";
import { Movie } from "..";
import useStyles from "./styles";

const MovieList = ({ movies }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
};

export default MovieList;
