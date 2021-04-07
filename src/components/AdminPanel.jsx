import { Container, Button, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  selectItem: {
    marginBottom: '20px'
  }

}));

const AdminPanel = () => {

  const classes = useStyles();

  const addItem = (event) => {
    event.preventDefault();
    console.log('addItem')
  }

  return (
    <Container>
      <form className={classes.root} onSubmit={() => addItem}>
        <Grid>
          <TextField className={classes.selectItem} id="" label="Назва" variant="outlined" size="small" />
          <TextField className={classes.selectItem} id="" label="Тип" variant="outlined" size="small" />
          <TextField className={classes.selectItem} id="" label="Сорт" variant="outlined" size="small" />
          <TextField className={classes.selectItem} id="" label="Вага" variant="outlined" size="small" />
          <TextField className={classes.selectItem} id="" label="Опис" variant="outlined" size="small" />
          <TextField className={classes.selectItem} id="" label="Ціна" variant="outlined" size="small" />
          <Button variant="contained" color="primary" type="submit">Додати</Button>
        </Grid>
      </form>
    </Container>
  )
}

export default AdminPanel