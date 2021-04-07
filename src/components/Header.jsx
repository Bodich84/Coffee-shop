import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import HeaderCart from './HeaderCart';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: theme.spacing(4),
  },
  logoText: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit'
  },
  adminBtn: {
    marginRight: theme.spacing(2)
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root} position="relative">
      <Container>
        <Toolbar>
          <Typography component={Link} exact='true' to="/" variant="h4" className={classes.logoText}>Coffee shop</Typography>
          <Button className={classes.adminBtn} component={Link} to="/admin" variant="outlined" color="inherit">Admin</Button>
          <HeaderCart />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header