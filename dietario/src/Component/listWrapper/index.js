import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button, makeStyles, Typography} from '@material-ui/core';
import * as foodNutrients from '../../foodNutrients';
import List from './table';

const ListWrapper = () =>{
  const classes = useStyles();
  const [foods,setFoods] = useState(null);
  const [loading, setLoading] = useState(true);

  const handelFetch = async () =>{
    await foodNutrients.init();
    const data = foodNutrients.getFoods();
    setFoods(data);
    setLoading(false);
  }

  useEffect(()=>{
    handelFetch();
  },[]);

  if(loading){
    return(
    <Typography class={classes.loading}>Carregando...</Typography>
    )
  }

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography class={classes.h1}>
            Veja os Alimentos Disponiveis
          </Typography>
        </div>
        <List items={foods} />
          <Link to={{ pathname: "/" }} className={classes.button}> voltar</Link>
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    fontFamily: "Monospace",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderStyle: "solid",
    borderWidth: "thin",
    color: "white",
    textDecoration: "none",
    fontSize: "1.5em",
    padding: "1em",
    margin: "1em",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    height: 10,
  },
  loading: {
    marginTop: 40,
    fontSize: "24px",
    color: "#0080ff",
    position: "center",
  },
  header: {
    marginTop: 30,
    marginBottom: 30,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  h1: {
    fontSize: "30px",
    color: "#3f51b5",
  },
}));

export default ListWrapper;