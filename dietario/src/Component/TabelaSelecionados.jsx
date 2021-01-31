import React, { useState, useEffect } from 'react'

import { Box, Grid } from "@material-ui/core"
import { DataGrid } from "@material-ui/data-grid"
import TypoGraphy from "@material-ui/core/Typography";

const int2day = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

const TabelaSelecionados = props => {
  
  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
  const [selectedDay, setSelectedDay] = useState(0)

  useEffect(() => { setRows(props.rows) }, [props.rows])
  useEffect(() => { setColumns(props.columns) }, [props.columns])
  useEffect(() => { setSelectedRows(props.selectedRows) }, [props.selectedRows])
  useEffect(() => { setSelectedDay(props.selectedDay) }, [props.selectedDay])

  return (
    <>
      <TypoGraphy variant="h3" component="h2">
        Selecionados
      </TypoGraphy>
      <DataGrid rowHeight={32} hideFooter
      rows={rows.filter(item => selectedRows.includes(item.id))} columns={columns}
       onRowClick={({row}) => {
         props.handleRemoveItem(row.id)
       }} />
    </>
  )
}

export default TabelaSelecionados