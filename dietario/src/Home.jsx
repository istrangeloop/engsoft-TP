import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box } from '@material-ui/core'

const Home = props => {

    return (
        <Container>
            <div id="home-header">
                <h1>Dietário</h1>
                <p>
                    Um planejador de dietas saudáveis!
                </p>  
            </div>
        
            <div className="home-main">
                <Link to={{ pathname: "/dieta" }} className="home-button">
                    "Crie sua Dieta aqui!"
                </Link>
            </div>
        </Container>
    )
}

export default Home
