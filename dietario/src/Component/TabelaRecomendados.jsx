import React, { useState, useEffect } from 'react'

import { Box, Grid, makeStyles } from "@material-ui/core"
import { DataGrid } from "@material-ui/data-grid"
import TypoGraphy from "@material-ui/core/Typography";

const TabelaRecomendados = props => {
  const classes = useStyles();
  
  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])

  useEffect(() => { setRows(props.rows) }, [props.rows])
  useEffect(() => { setColumns(props.columns) }, [props.columns])

  return (
    <>
      <Box class={classes.root}>
        <TypoGraphy variant="h3" component="h2">
          Recomendados
        </TypoGraphy>
      </Box>
      <DataGrid rowHeight={32} hideFooterPagination 
      rows={rows} columns={columns} onRowClick={({row}) =>{
            props.handleAddItem(row.id)
          }} />
    </>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
    marginTop:20,
    color: theme.palette.primary.main,
  }
}))

export default TabelaRecomendados