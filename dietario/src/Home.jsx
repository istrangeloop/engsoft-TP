import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box } from '@material-ui/core'
import TypoGraphy from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const Home = props => {

    const useStyles = makeStyles(theme => ({
        root: {
            margin: theme.spacing(0),
            height: '500px',
            maxWidth: '100vw',
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        },
        header: {
            textAlign: "left",
            padding: '72px 32px 95px',
            marginBottom: theme.spacing(4),
        },
        title: {
            color: theme.palette.primary.main,
            fontFamily: "Serif",
        },
        subtitle: {
            color: "white",
            fontSize: 'xx-large',
            paddingLeft: '15px'
        },
        button: {
            fontFamily: "Monospace",
            backgroundColor: 'rgb(247 215 144 / 15%)',
            borderStyle: 'solid',
            borderWidth: 'thin',
            color: 'white',
            textDecoration: 'none',
            fontSize: '2em',
            padding: '1em',
            margin: '1em',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            height: 48,
        }
    }))

    const classes = useStyles()

    return (
        <Container className={classes.root} >
            <Box className={classes.header} >
                <img alt="" style={{ width: '37vw' }} src="/logo.svg" />
                <TypoGraphy variant="h4" component="h4" className={classes.subtitle}>
                    Um planejador de dietas saudáveis!
                </TypoGraphy>
            </Box>
            <Link to={{ pathname: "/dieta" }} className={classes.button}>
                Crie sua Dieta aqui!
                </Link>
            <Link to={{ pathname: "/foods" }} className={classes.button}>Todos alimentos</Link>
        </Container>
    )
}

export default Home
