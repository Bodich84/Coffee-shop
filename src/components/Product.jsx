import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addToCart } from '../redux/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
  },
  itemImg: {
    width: '100%',
  },
  imgBox: {
    height: 200,
    backgroundPosition: 'center',
    backgroundSize: '110%'
  },
  cardContent: {
    minHeight: 140
  },
}));



const Product = ({ id, name, imgUrl, price, type, sort, taste, weight }) => {

  const dispatch = useDispatch();

  const [quantity, setQuantity] = React.useState(1)

  const classes = useStyles();

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.paper}>
        <CardMedia
          className={classes.imgBox}
          style={{ backgroundImage: `url(${imgUrl})` }}>
          <img src="" alt="" />
        </CardMedia>

        <CardContent className={classes.cardContent}>
          <Typography variant="h6" color="textSecondary">{name}</Typography>
          <Typography variant="h5">{price}грн.</Typography>
          <Typography>
            {type} | {sort} | {taste} | {weight}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            color="primary"
            variant="outlined"
            onClick={(event) => {
              dispatch(addToCart(id, quantity))
            }}>Додати</Button>
          <TextField
            label="Кількість"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
            defaultValue={quantity}
            onClick={event => {
              if (event.target.value < 1) {
                event.target.value = 1
              }
              setQuantity(event.target.value)
            }}
            onChange={event => {
              if (event.target.value < 1 || event.target.value === undefined) {
                event.target.value = 1
              }
            }}
          />
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Product