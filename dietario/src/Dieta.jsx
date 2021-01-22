import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Typography } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid';
import TypoGraphy from '@material-ui/core/Typography'
import { valoresDiarios } from './utils.js'


const TabelaValoresDiarios = props => {

    const cols2 = [
        { field: 'nome', headerName: 'Nutriente', width: 130 },
        { field: 'selecionado', headerName: 'Selecionado', type: 'number', width: 130 },
        { field: 'recomendado', headerName: 'Recomendado', type: 'number', width: 130 },
        { field: 'unidade', headerName: 'Unidade', width: 130 },
      ];

    const rows = valoresDiarios.map((item) => {
        return {id: item.id, nome: item.nome, selecionado: 0, recomendado: item.valor, unidade: item.unidade}
    })
    console.log(rows)
    return (
        <>
            <TypoGraphy variant="h3" component="h2" >
            Valores Diários
            </TypoGraphy>
            <DataGrid rows={rows} columns={cols2} /> 
        </>
    )
}

// este componente é a interface que contém o que será exibido na tela

const Dieta = props => {

    // mock data
    const columns = [
        {
            field: 'nome',
            headerName: 'Alimento',
            description: 'Nome do alimento',
            sortable: true,
            width: 160,
            //valueGetter: (params) =>
            //  `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
          },
        { field: 'id', headerName: 'ID', type: 'number', width: 70 },
        { field: 'calorias', headerName: 'Calorias', type: 'number', width: 130 },
        { field: 'gordura', headerName: 'Gorduras', type: 'number', width: 130 },
        { field: 'carboidratos', headerName: 'Carboidratos', type: 'number', width: 130 },
        { field: 'proteinas', headerName: 'Proteinas', type: 'number', width: 130 },
      ];
      
    const rows = [
        { id: 1, nome: 'Frozen yoghurt', calorias: 159, gordura: 6.0, carboidratos: 24, proteinas: 4.0},
        { id: 2, nome: 'Ice cream sandwich', calorias: 237, gordura: 9.0, carboidratos: 37, proteinas: 4.3},
        { id: 3, nome: 'Eclair', calorias: 262, gordura: 16.0,carboidratos:  24, proteinas:  6.0},
        { id: 4, nome: 'Cupcake', calorias:  305, gordura: 3.7, carboidratos: 67, proteinas: 4.3},
        { id: 5, nome: 'Gingerbread', calorias: 356, gordura: 16.0,carboidratos:  49,proteinas:  3.9},
      ];
    ///

    return (
        <>
            <Grid container spacing={3} style={{ width: '90%' }} justify="center">
                <Grid item xs={8} style={{ height: 400 }}>
                    <TypoGraphy variant="h3" component="h2">
                    Selecionados
                    </TypoGraphy>
                    <DataGrid rows={rows} columns={columns} checkboxSelection />  
                </Grid>
                <Grid item xs={4} style={{ height: 400 }}>
                    <TabelaValoresDiarios />
                </Grid>
                <Grid item xs={12} style={{ height: 400, width: '60%' }}>
                    <Box><TypoGraphy variant="h3" component="h2">
                    Recomendados
                    </TypoGraphy></Box>
                    <DataGrid rows={rows} columns={columns} checkboxSelection /> 
                </Grid>
            </Grid>
            <p>Imprimir</p>
            <Link to={{ pathname: "/" }} className="home-button">
            "Voltar pra Home"
            </Link>  
        </>
    )
}

export default Dieta
