import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, IconButton, Divider, Icon } from "@material-ui/core";
import { EventBusy, Publish, Save, Settings } from '@material-ui/icons';

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
    console.log("SELECTED DAY")
    console.log(this.state.selectedDay)
    let updatedDiets = this.state.dailyDiets
    updatedDiets[this.state.selectedDay].push(id)
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
          <Grid item xs={4} style={{ height: "100%", paddingRight: 0 }} justify="center" >
            <Grid container spacing={3} style={{ width: "100%", marginLeft: 0, marginRight: 0 }} justify="center"  direction="column">
              
              <Grid item style={{ height: '42vh', }}>
                <TabelaSelecionados rows={this.state.rows}
                  columns={this.state.columns} handleRemoveItem={this.handleRemoveItem}
                  selectedRows={this.state.dailyDiets[this.state.selectedDay] || []}
                  selectedDay={this.state.selectedDay} setDay={this.setDay} />
              </Grid>
              <Grid item style={{ height: '42vh' }}>
                <TabelaValoresTotais diet={this.state.dailyDiets[this.state.selectedDay]}
                  foods={this.state.rows} />
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={7} style={{ height: '85vh', width: "60%" }}>
                <TabelaRecomendados rows={this.state.rows}
                  columns={this.state.columns} handleAddItem={this.handleAddItem} />
              </Grid>
          <Grid item xs={1} style={{ height: '100vh', padding: '0 0 0 20px' }} justify="center">
            <div style={{ 
              height: '100%', 
              backgroundColor: '#ff8e53', 
              borderRadius: '25px 0',
              paddingLeft: '20px',
              paddingRight: '20px'
              }}>
              <Button><Link to={{ pathname: "/" }} style={{ textDecoration: 'none', color: 'white', marginTop: 20}}>
                <Icon>
                <img style={{width: '4vw'}} src="/icon.svg"/>
                </Icon>
              </Link></Button>

              <Divider style={{ marginTop: 10, marginBottom: 40 }}/>
              
              <IconButton>
              <EventBusy fontSize="large"/>
              </IconButton>

              <IconButton>
              <Save fontSize="large"/>
              </IconButton>

              <IconButton>
              <Publish fontSize="large"/>
              </IconButton>

              <IconButton>
              <Settings fontSize="large"/>
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Dieta;
