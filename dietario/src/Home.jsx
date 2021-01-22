import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box } from '@material-ui/core'
import TypoGraphy from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const Home = props => {

    const useStyles = makeStyles({
        root: {
          width: '100%',
          maxWidth: 500,
        },
      });
      
    const classes = useStyles();

    return (
        <Container>
            <div id="home-header">
                <TypoGraphy variant="h1" component="h2" gutterBottom>
                Dietário
                </TypoGraphy>
                <TypoGraphy variant="h3" component="h2" gutterBottom>
                Um planejador de dietas saudáveis!
                </TypoGraphy>
            </div>
        
            <div className="home-main">
                <Link variant="button" to={{ pathname: "/dieta" }} className="home-button">
                    "Crie sua Dieta aqui!"
                </Link>
            </div>
        </Container>
    )
}

export default Home
