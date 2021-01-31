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
        <Button variant="contained" className={classes.button}>
          <Link
            to={{ pathname: "/" }}
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            {" "}
            voltar
          </Link>
        </Button>
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    marginTop: 20,
    margin: "0 auto",
    display: "block",
    background: "#3f51b5",
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