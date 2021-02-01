import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import { DataGrid } from "@material-ui/data-grid"
import TypoGraphy from "@material-ui/core/Typography";
import { valoresDiarios, initial } from "./../foodNutrients.js";
import { makeStyles } from '@material-ui/core/styles';

const TabelaValoresTotais = (props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      border: 0,
      color: theme.palette.primary.main,
      '& .super-app.negative': {
        color: '#FF4444',
      },
      '& .super-app.positive': {
        color: '#00AA44',
      },
      '& .super-app.neutral': {
        color: '#FFAA00',
      },
      '& .super-app.excess': {
        color: '#AA00AA',
      },
    },
    title: {
      color: theme.palette.primary.main,
      fontFamily: "Serif",
    },
  }));

  const classes = useStyles();


  const columns = [
    { field: "nome", headerName: "Nutriente", width: 130 },
    { field: "selecionado", headerName: "Sel.", description: "Selecionado", type: "number", flex: 0.25, 
    cellClassName: (params) =>
      clsx('super-app', {
        positive: params.getValue('selecionado')/ params.getValue('recomendado') > 0.7 &&
        params.getValue('selecionado')/ params.getValue('recomendado') <= 1.3,
        neutral:  0.3 <= params.getValue('selecionado')/ params.getValue('recomendado') &&
        params.getValue('selecionado')/ params.getValue('recomendado') <= 0.7,
        negative: params.getValue('selecionado')/ params.getValue('recomendado') <= 0.3,
        excess: params.getValue('selecionado')/ params.getValue('recomendado') > 1.3,
      }),
    },
    { field: "recomendado", headerName: "Recom.", description: "Recomendado", type: "number", flex: 0.35 },
    { field: "unidade", headerName: "Unidade", flex: 0.4 },
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
      <TypoGraphy className={classes.title} variant="h3" component="h2" style={{marginBottom: -15, marginTop: 38}}>
        Valores Diários
        </TypoGraphy>
      <DataGrid rowHeight={32} hideFooter
        className={classes.root} rows={valoresDiarios.map((item) => formatRowData(item))} columns={columns} />
    </>
  );
};

export default TabelaValoresTotais
