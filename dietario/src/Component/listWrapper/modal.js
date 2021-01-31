import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {Grid, TextField} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "60%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "5%",
    left: "20%",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    marginTop: 20,
    margin: "0 auto",
    color: "white",
    display: "block",
    fontSize: "16px",
    background: "blue",
    borderRadius: "5px",
    border: "none",
    background: "#00264d",
  },
  button1: {
    background: "#3f51b5",
    color: "#ffffff",
    borderRadius: "10px",
  },
}));

export default function ModalFunction({data}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = useState(false);

  let list = [];

  data && Object.entries(data).forEach(([key,value])=>{
    if(key !== 'id' && key !== 'Nome'){
      list.push({key,value});
    }
  })
  console.log(list);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <form className={classes.root} noValidate>
        <Grid container spacing={1}>
          {list &&
            list.map((item) => {
              return (
                <Grid item xs={4}>
                <TextField
                  id="standard-read-only-input"
                  label={item.key}
                  defaultValue={item.value}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                </Grid>
              );
            })}
        </Grid>
      </form>
      <button type="button" onClick={handleClose} className={classes.button}>
        fechar
      </button>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} style={{fontSize:'20px'}} className={classes.button1}>
        Visualizar
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        class={classes.modal}
      >
        {body}
      </Modal>
    </div>
  );
}
