import React, { useState, useEffect } from 'react'

import { DataGrid } from "@material-ui/data-grid"
import TypoGraphy from "@material-ui/core/Typography";
import { valoresDiarios, initial } from "./../foodNutrients.js";
import { makeStyles } from '@material-ui/core/styles';

const TabelaValoresTotais = (props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      border: 0,
      color: theme.palette.primary.main,
    },
    title: {
      color: theme.palette.primary.main,
      fontFamily: "Serif",
    },
  }));

  const classes = useStyles();

  const columns = [
    { field: "nome", headerName: "Nutriente", width: 130 },
    { field: "selecionado", headerName: "Selecionado", type: "number", width: 130 },
    { field: "recomendado", headerName: "Recomendado", type: "number", width: 130 },
    { field: "unidade", headerName: "Unidade", width: 130 },
  ];

  const [sumTotals, setSumTotals] = useState([])
  const [foodsInDiet, setFoodsInDiet] = useState([])
  useEffect(() => { setFoodsInDiet(props.foods.filter(item => props.diet.includes(item.id))) }, [props])
  useEffect(() => {
    if (foodsInDiet.length > 0) {
      setSumTotals(getSum(foodsInDiet))
    } else {
      setSumTotals(initial)
    }
  }, [foodsInDiet])

  const isNumerical = (v) => {
    if (typeof(v) == 'number')
      return v;
    else return 0;
  }

  const getSum = (items) => {
    var keys = Object.keys(items[0])
    var result = {}
    keys.forEach((key, index) => {
      result[key] = items.map(el => isNumerical(el[key]) )
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
      <TypoGraphy className={classes.title} variant="h3" component="h2" style={{marginBottom: -20, marginTop: 20}}>
        Valores Diários
        </TypoGraphy>
      <DataGrid rowHeight={32} hideFooter
        className={classes.root} rows={valoresDiarios.map((item) => formatRowData(item))} columns={columns} />
    </>
  );
};

export default TabelaValoresTotais
