import React, { useState, useEffect } from "react";

import { Button, ButtonGroup, Grid } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const int2day = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const DaySelector = (props) => {
  const { selectedDay, setDay } = props;

  const { root: _, ...rippleClasses } = useStyles();

  const dayButton = (day) => (
    <Grid item xs>
      <Button
        TouchRippleProps={{ classes: rippleClasses }}
        onClick={() => {
          setDay(day);
        }}
        style={{
          fontWeight: selectedDay === day ? "bold" : "",
          color: selectedDay === day ? "black" : "#9e9e9e",
          borderColor: selectedDay === day ? "#e0e0e0" : "#fafafa #e0e0e0",
          backgroundColor: selectedDay === day ? "#fafafa" : "#0000000a",
          borderStyle: selectedDay === day ? "solid solid none solid" : "solid none none solid",
          zIndex: selectedDay === day ? 1 : 0,
          borderRadius: selectedDay === day ? "4px 4px 0 0" : "6px 6px 0 0",
          borderWidth: "thin",
          width: "100%",
        }}
      >
        {int2day[day]}
      </Button>
    </Grid>
  );

  return (
    <Grid container style={{ marginTop: 20, marginBottom: "-1px" }}>
      {[...Array(7).keys()].map((day) => dayButton(day))}
    </Grid>
  );
};

const columns = [
  { field: "nome", headerName: "Nome", width: 300 },
  {
    field: "quantidade",
    headerName: "Quantidade",
    type: "number",
    align: "right",
    flex: 1,
    renderCell: (params) => (
      <>
        {params.value}g
        <ButtonGroup color="primary" variant="outlined" size="small" style={{ marginLeft: "10px" }}>
          <Button style={{ padding: 0, width: "20px" }}>-</Button>
          <Button style={{ padding: 0, width: "20px" }}>+</Button>
        </ButtonGroup>
      </>
    ),
  },
];

const TabelaSelecionados = (props) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    setSelectedRows(props.selectedRows);
  }, [props.selectedRows]);
  useEffect(() => {
    setSelectedDay(props.selectedDay);
  }, [props.selectedDay]);

  const formatRowData = (item) => {
    return {
      id: item.id,
      nome: item.Nome,
      quantidade: 100,
      recomendado: item.Energia,
    };
  };

  return (
    <>
      {/* <TypoGraphy variant="h3" component="h2">
        Selecionados
      </TypoGraphy> */}
      <DaySelector selectedDay={selectedDay} setDay={props.setDay} />
      <DataGrid
        className={classes.root}
        rowHeight={32}
        scrollbarSize={17}
        hideFooter
        alignContent="stretch"
        rows={selectedRows.map((item) => formatRowData(item))}
        columns={columns}
        onRowClick={({ row }) => {
          props.handleRemoveItem(row.id);
        }}
      />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 20,
    color: theme.palette.primary.main,
    marginBottom: "50px",
    borderRadius: "0 0 4px 4px",
  },
  rippleVisible: {
    opacity: 0.1,
    animation: `$enter 550ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes enter": {
    "0%": {
      transform: "scale(0)",
      opacity: 0.05,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 0.1,
    },
  },
}));

export default TabelaSelecionados;
