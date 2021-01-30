import React, { useState, useEffect } from 'react'

import { DataGrid } from "@material-ui/data-grid"
import TypoGraphy from "@material-ui/core/Typography";
import { valoresDiarios } from "./../utils.js";

const TabelaValoresTotais = (props) => {
    
    const columns = [
      { field: "nome", headerName: "Nutriente", width: 130 },
      { field: "selecionado", headerName: "Selecionado", type: "number", width: 130 },
      { field: "recomendado", headerName: "Recomendado", type: "number", width: 130 },
      { field: "unidade", headerName: "Unidade", width: 130 },
    ];

    const [sumTotals, setSumTotals] = useState([])
    const [foodsInDiet, setFoodsInDiet] = useState([])
    useEffect(() => { setFoodsInDiet(props.foods.filter(item => props.diet[0].includes(item.id))) },[props])
    useEffect(() => { if (foodsInDiet.length > 0) { setSumTotals(getSum(foodsInDiet)) } },[foodsInDiet])

    const getSum = (items) => {
      var keys = Object.keys(items[0])
      var result = {}
      keys.forEach((key, index) => {
        result[key] =  items.map(el => el[key])
                            .reduce((acc, int) => acc + int)
      });
      delete result["Nome"];
      delete result["id"];  
      return result;
    }

    const formatRowData = (item) => {
      return { 
        id: item.id, 
        nome: item.nome, 
        selecionado: sumTotals[item.nome] || 0, 
        recomendado: item.valor, 
        unidade: item.unidade 
      };
    }

    return (
      <>
        <TypoGraphy variant="h3" component="h2">
          Valores Diários
        </TypoGraphy>
        <DataGrid rows={ valoresDiarios.map((item) => formatRowData(item)) } columns={columns} />
      </>
    );
  };
  
  export default TabelaValoresTotais