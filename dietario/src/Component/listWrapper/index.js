import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import * as foodNutrients from '../../foodNutrients';
import List from './table';

const ListWrapper = () =>{
  const [foods,setFoods] = useState(null);

  const handelFetch = async () =>{
    await foodNutrients.init();
    const data = foodNutrients.getFoods();
    setFoods(data);
  }

  useEffect(()=>{
    handelFetch();
  },[]);

    return (
      <>
        <List
          items = {foods}
        />
        <Button variant="contained" color="primary"><Link to={{pathname:'/'}}> voltar</Link></Button>
      </>
    );
}

export default ListWrapper;