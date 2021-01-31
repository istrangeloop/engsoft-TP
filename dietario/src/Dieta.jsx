import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import TypoGraphy from "@material-ui/core/Typography";

import * as foodNutrients from "./foodNutrients.js";
import TabelaSelecionados from "./Component/TabelaSelecionados"
import TabelaRecomendados from "./Component/TabelaRecomendados"
import TabelaValoresTotais from "./Component/TabelaValoresTotais"

// este componente é a interface que contém o que será exibido na tela

class Dieta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      columns: [],
      rows: [],
      dailyDiets: [[], [], [], [], [], [], []], // Dias da semana
      selectedDay: 0,
    };
  }

  async componentDidMount() {
    await foodNutrients.init();

    const no_value = { Tr: 0, "*": -1, NA: -2, "": -3 };
    const units = foodNutrients.getUnits();
    const widths = {
      Nome: 325,
      Energia: 141,
      Colesterol: 150,
      Carboidrato: 149,
      "Fibra Alimentar": 170,
      Magnésio: 148,
      Manganês: 152,
      Fósforo: 134,
      Potássio: 141,
      "Vitamina A": 150,
      Tiamina: 141,
      Riboflavina: 157,
      "Vitamina B6": 163,
      Niacina: 134,
      "Vitamina C": 163,
    };

    this.setState({
      columns: foodNutrients
        .getColumns()
        .map((x, i) => {
          return {
            field: x,
            headerName: units[i] ? `${x} (${units[i]})` : x,
            width: x in widths ? widths[x] : 130,
            sortComparator: (v1, v2) => (v1 in no_value ? no_value[v1] : v1) - (v2 in no_value ? no_value[v2] : v2),
            hide: ["id", "Umidade", "Cinzas", "RE", "RAE"].includes(x),
          };
        })
        .slice(1),
    });

    this.setState({ rows: foodNutrients.getFoods() });

    this.setState({ initialized: true });
  }

  handleAddItem = (id) => {
    let updatedDiets = this.state.dailyDiets
    updatedDiets[this.state.selectedDay].push(id)
    // console.log(updatedDiets)
    this.setState({ dailyDiets: updatedDiets })
  }

  handleRemoveItem = (id) => {
    let updatedDiets = this.state.dailyDiets

    updatedDiets[this.state.selectedDay] =
      updatedDiets[this.state.selectedDay].filter(itemId => itemId != id)

    this.setState({ dailyDiets: updatedDiets })
  }

  setDay = day => {
    this.setState({ selectedDay: day })
  }

  render() {
    return (
      <>
        <Grid container spacing={1} style={{ width: "100%", marginLeft: 0, marginRight: 0 }} justify="center">
          <Grid item xs={11} style={{ height: "100%", paddingRight: 0 }} justify="center">
            <Grid container spacing={3} style={{ width: "100%", marginLeft: 0, marginRight: 0 }} justify="center">
              <Grid item xs={8} style={{ height: '42vh', }}>
                <TabelaSelecionados rows={this.state.rows}
                  columns={this.state.columns} handleRemoveItem={this.handleRemoveItem}
                  selectedRows={this.state.dailyDiets[this.state.selectedDay] || []}
                  selectedDay={this.state.selectedDay} setDay={this.setDay} />
              </Grid>
              <Grid item xs={4} style={{ height: '42vh' }}>
                <TabelaValoresTotais diet={this.state.dailyDiets[this.state.selectedDay]}
                  foods={this.state.rows} />
              </Grid>
              <Grid item xs={12} style={{ height: '50vh', width: "60%" }}>
                <TabelaRecomendados rows={this.state.rows}
                  columns={this.state.columns} handleAddItem={this.handleAddItem} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} style={{ height: '100vh', padding: '0 0 0 20px' }} justify="center">
            <div style={{ height: '100%', backgroundColor: '#FF8556' }}>
              <Button><Link to={{ pathname: "/" }} style={{ textDecoration: 'none', color: 'white', marginTop: 30, fontSize: '1.5em',  backgroundColor: '#556cd6' }}>
                Voltar pra Home
              </Link></Button>

              <TypoGraphy style={{ marginTop: 20 }}>Imprimir</TypoGraphy>
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Dieta;
