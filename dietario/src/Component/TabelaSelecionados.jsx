import React, { useState, useEffect } from 'react'

import { Box, Button, Grid } from "@material-ui/core"
import { DataGrid } from "@material-ui/data-grid"
import TypoGraphy from "@material-ui/core/Typography";

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
    <Grid container>
      {[...Array(7).keys()].map(day => dayButton(day))}
    </Grid>
  )

}

const TabelaSelecionados = props => {

  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
  const [selectedDay, setSelectedDay] = useState(0)

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
      <DaySelector selectedDay={selectedDay} setDay={props.setDay} />
      <DataGrid rowHeight={32} hideFooter
        rows={rows.filter(item => selectedRows.includes(item.id))} columns={columns}
        onRowClick={({ row }) => {
          props.handleRemoveItem(row.id)
        }} />
    </>
  )
}

export default TabelaSelecionados