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
    <Typography>Carregando...</Typography>
    )
  }

    return (
      <>
        <List
          items = {foods}
        />
        <Button variant="contained" color="secondary" className={classes.button}><Link to={{pathname:'/'}} style={{textDecoration:'none',}}> voltar</Link></Button>
      </>
    );
}

const useStyles = makeStyles((theme)=>({
  button:{
    marginTop:20,
    margin: '0 auto',
    display:'block',
  }
}))

export default ListWrapper;