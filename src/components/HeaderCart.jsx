import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';

const useStyles = makeStyles((theme) => ({
  value: {
    paddingRight: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderRight: '1px solid',
  }
}))

const HeaderCart = () => {

  const classes = useStyles()

  const state = useSelector((state) => {
    return {
      items: state.items,
      cart: state.cart,
    }
  })

  let sum = 0;
  let cost = 0

  return (
    <Button
      variant="contained"
      component={Link}
      to="cart"
      color="secondary"
      endIcon={<ShoppingBasketRoundedIcon />}>
      <span className={classes.value}>
        {state.cart.map(cart => {
          sum += cart.number

          state.items.map(item => {
            if (item.id === cart.id) {
              cost += item.price * cart.number
            }
            return null
          })

          return null
        })}
        {sum}
      </span>
      {cost} грн.
    </Button>
  )
}

export default HeaderCart

