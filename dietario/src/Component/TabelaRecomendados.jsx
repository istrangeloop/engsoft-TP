import React, { useState, useEffect } from 'react'

import { Box, Grid } from "@material-ui/core"
import { DataGrid } from "@material-ui/data-grid"
import TypoGraphy from "@material-ui/core/Typography";

const TabelaRecomendados = props => {
  
  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])

  useEffect(() => { setRows(props.rows) }, [props.rows])
  useEffect(() => { setColumns(props.columns) }, [props.columns])

  return (
    <>
      <Box>
        <TypoGraphy variant="h3" component="h2">
          Recomendados
        </TypoGraphy>
      </Box>
      <DataGrid rows={rows} columns={columns}
       onRowClick={({row}) =>{
         props.handleAddItem(row.id)
       }} />
    </>
  )
}

export default TabelaRecomendados