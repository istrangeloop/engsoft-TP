import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";
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
      dailyDiets: [[],[],[],[],[],[],[]], // Dias da semana
      selectedDay: 0,
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

  increaseDay = () => {
    this.setState({ selectedDay: (this.state.selectedDay + 1)%7 })
  }

  decreaseDay = () => {
    let prevDay = this.state.selectedDay - 1;
    this.setState({ selectedDay: prevDay >= 0 ? prevDay : 6 })
  }

  render() {
    return (
      <>
        <Grid container spacing={3} style={{ width: "90%" }} justify="center">
          <Grid item xs={8} style={{ height: 400 }}>
            <TabelaSelecionados rows={this.state.rows}
             columns={this.state.columns} handleRemoveItem={this.handleRemoveItem}
             selectedRows={this.state.dailyDiets[this.state.selectedDay] || []}
             selectedDay={this.state.selectedDay} increaseDay={this.increaseDay}
             decreaseDay={this.decreaseDay} />
          </Grid>
          <Grid item xs={4} style={{ height: 400 }}>
            <TabelaValoresTotais diet={this.state.dailyDiets[this.state.selectedDay]}
             foods={this.state.rows} />
          </Grid>
          <Grid item xs={12} style={{ height: 400, width: "60%" }}>
            <TabelaRecomendados rows={this.state.rows}
             columns={this.state.columns} handleAddItem={this.handleAddItem} />
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
