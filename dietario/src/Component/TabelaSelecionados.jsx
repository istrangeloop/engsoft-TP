import React, { useState, useEffect } from 'react'

import { Box, Button } from "@material-ui/core"
import { DataGrid } from "@material-ui/data-grid"
import TypoGraphy from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';


const int2day = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

const DaySelector = props => {
  const {
    selectedDay,
    increaseDay,
    decreaseDay
  } = props

  const buttonStyle = { fontSize: '20px' }
  const titleStyle = { display: 'flex', justifyContent: 'center', width: '10vw' }

  return (
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <Button onClick={decreaseDay} style={buttonStyle}>
        {"<"}
      </Button>
      <TypoGraphy style={titleStyle}>
        {int2day[selectedDay]}
      </TypoGraphy>
      <Button onClick={increaseDay} style={buttonStyle}>
        {">"}
      </Button>
    </Box>
  )

}

const TabelaSelecionados = props => {

  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
  const [selectedDay, setSelectedDay] = useState(0)
  const classes = useStyles();

  useEffect(() => { setRows(props.rows) }, [props.rows])
  useEffect(() => { setColumns(props.columns) }, [props.columns])
  useEffect(() => { setSelectedRows(props.selectedRows) }, [props.selectedRows])
  useEffect(() => {
    console.log("SelectedDay:")
    console.log(props.selectedDay)
    setSelectedDay(props.selectedDay)
  }, [props.selectedDay])



  return (
    <>
      {/* <TypoGraphy variant="h3" component="h2">
        Selecionados
      </TypoGraphy> */}
      <DaySelector selectedDay={selectedDay} increaseDay={props.increaseDay}
        decreaseDay={props.decreaseDay} />
      <DataGrid rowHeight={32} hideFooter className={classes.root}
        rows={rows.filter(item => selectedRows.includes(item.id))} columns={columns}
        onRowClick={({ row }) => {
          props.handleRemoveItem(row.id)
        }} />
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    color: theme.palette.primary.main,
  }
}))

export default TabelaSelecionados