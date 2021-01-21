import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box } from '@material-ui/core'

const Home = props => {

    return (
        <Container>
        <Box>
            Recomendados
            </Box>    
            <Box>
            Selecionados
            </Box>    
            <Box>
            Valores diários
            </Box>  
            Imprimir
            <Link to={{ pathname: "/" }} className="home-button">
            "Voltar pra Home"
            </Link>  
        </Container>

    )
}

export default Home
