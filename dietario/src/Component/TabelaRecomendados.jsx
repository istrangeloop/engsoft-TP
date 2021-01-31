import React, { useState, useEffect } from 'react'

import { Box, Grid, makeStyles } from "@material-ui/core"
import { DataGrid } from "@material-ui/data-grid"
import TypoGraphy from "@material-ui/core/Typography";
import SimplePagination from "./simplePagination"

const TabelaRecomendados = props => {
  const classes = useStyles();

  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])

  useEffect(() => { setRows(props.rows) }, [props.rows])
  useEffect(() => { setColumns(props.columns) }, [props.columns])

  return (
    <>
      <Box class={classes.root}>
        <TypoGraphy variant="h3" component="h2" style={{fontFamily: "Serif", marginBottom: -20, marginTop: 50}}>
          Alimentos
        </TypoGraphy>
      </Box>
      <DataGrid className={classes.root}
        rowHeight={35}
        hideFooterSelectedRowCount
        hideFooterRowCount
        autoPageSize
        rows={rows}
        columns={columns}
        onRowClick={({ row }) => {
          props.handleAddItem(row.id)
        }}
        components={{
          Pagination: SimplePagination,
        }}
      />
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    color: theme.palette.primary.main,
  }
  
}))

export default TabelaRecomendados