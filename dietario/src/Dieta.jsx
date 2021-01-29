import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import TypoGraphy from "@material-ui/core/Typography";
import { valoresDiarios } from "./utils.js";
import * as foodNutrients from "./foodNutrients.js";

const TabelaValoresDiarios = (props) => {
  const cols2 = [
    { field: "nome", headerName: "Nutriente", width: 130 },
    { field: "selecionado", headerName: "Selecionado", type: "number", width: 130 },
    { field: "recomendado", headerName: "Recomendado", type: "number", width: 130 },
    { field: "unidade", headerName: "Unidade", width: 130 },
  ];

  const rows = valoresDiarios.map((item) => {
    return { id: item.id, nome: item.nome, selecionado: 0, recomendado: item.valor, unidade: item.unidade };
  });
  console.log(rows);
  return (
    <>
      <TypoGraphy variant="h3" component="h2">
        Valores Diários
      </TypoGraphy>
      <DataGrid rows={rows} columns={cols2} />
    </>
  );
};

// este componente é a interface que contém o que será exibido na tela

class Dieta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      columns: [],
      rows: [],
    };
  }

  async componentDidMount() {
    await foodNutrients.init();

    const no_value = { Tr: 0, "*": -1, NA: -2, "": -3 };
    const units = foodNutrients.getUnits();
    this.setState({
      columns: foodNutrients
        .getColumns()
        .map((x, i) => {
          return {
            field: x,
            headerName: units[i] ? `${x} (${units[i]})` : x,
            width: 130,
            sortComparator: (v1, v2) => (v1 in no_value ? no_value[v1] : v1) - (v2 in no_value ? no_value[v2] : v2),
          };
        })
        .slice(1),
    });

    this.setState({ rows: foodNutrients.getFoods() });

    this.setState({ initialized: true });
  }

  render() {
    return (
      <>
        <Grid container spacing={3} style={{ width: "90%" }} justify="center">
          <Grid item xs={8} style={{ height: 400 }}>
            <TypoGraphy variant="h3" component="h2">
              Selecionados
            </TypoGraphy>
            <DataGrid rows={this.state.rows} columns={this.state.columns} checkboxSelection />
          </Grid>
          <Grid item xs={4} style={{ height: 400 }}>
            <TabelaValoresDiarios />
          </Grid>
          <Grid item xs={12} style={{ height: 400, width: "60%" }}>
            <Box>
              <TypoGraphy variant="h3" component="h2">
                Recomendados
              </TypoGraphy>
            </Box>
            <DataGrid rows={this.state.rows} columns={this.state.columns} checkboxSelection />
          </Grid>
        </Grid>
        <p>Imprimir</p>
        <Link to={{ pathname: "/" }} className="home-button">
          "Voltar pra Home"
        </Link>
      </>
    );
  }
}

export default Dieta;
