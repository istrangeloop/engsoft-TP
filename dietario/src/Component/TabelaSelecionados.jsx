import React, { useState, useEffect } from 'react'

import { Box, Button, ButtonGroup, Grid } from "@material-ui/core"
import { DataGrid } from "@material-ui/data-grid"
import TypoGraphy from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';


const int2day = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab',
]

const DaySelector = props => {
  const {
    selectedDay,
    setDay
  } = props

  const dayButton = day => (
    <Grid item xs>
      <Button onClick={() => setDay(day)}
        style={{
          fontWeight: selectedDay == day ? "bold" : "",
          width: "100%"
        }}>
        {int2day[day]}
      </Button>
    </Grid>
  )

  return (
    <Grid container style={{ marginTop: 20 }}>
      {[...Array(7).keys()].map(day => dayButton(day))}
    </Grid>
  )

}

const columns = [
  { field: "nome", headerName: "Nome", width: 300 },
  { field: "quantidade", 
    headerName: "Quantidade", 
    type: "number", 
    align: "right",
    width: 150,
    renderCell: (params) => (
      <>
        {params.value}g
        <ButtonGroup color="primary" 
        variant="outlined" size="small" 
        style={{marginLeft: '10px'}}>
          <Button style={{padding: 0,  width: '20px'}}>-</Button>
          <Button style={{padding: 0,  width: '20px'}}>+</Button>
        </ButtonGroup>
      </>),},
];

const TabelaSelecionados = props => {

  const [rows, setRows] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
  const [selectedDay, setSelectedDay] = useState(0)
  const [foodsInDiet, setFoodsInDiet] = useState([])

  const classes = useStyles();

  useEffect(() => { setRows(props.rows) }, [props.rows])
  useEffect(() => { setSelectedRows(props.selectedRows) }, [props.selectedRows])
  useEffect(() => { setFoodsInDiet(rows.filter(item => selectedRows.includes(item.id))) }, [props])
  useEffect(() => {
    console.log("SelectedDay:")
    console.log(props.selectedDay)
    setSelectedDay(props.selectedDay)
  }, [props.selectedDay])

  const formatRowData = (item) => {
    console.log(item)
    return {
      id: item.id,
      nome: item.Nome,
      quantidade: 100,
      recomendado: item.Energia,
    };
  }

  return (
    <>
      {/* <TypoGraphy variant="h3" component="h2">
        Selecionados
      </TypoGraphy> */}
      <DaySelector selectedDay={selectedDay} setDay={props.setDay} />
      <DataGrid rowHeight={32} hideFooter className={classes.root} alignContent='stretch'
        rows={foodsInDiet.map(item => formatRowData(item))} columns={columns}
        onRowClick={({ row }) => {
          props.handleRemoveItem(row.id)
        }} />
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 20,
    color: theme.palette.primary.main,
  }
}))

export default TabelaSelecionados