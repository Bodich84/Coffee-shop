import { useSelector } from 'react-redux'
import { Grid, Container } from '@material-ui/core';

import Product from './Product';

const Home = () => {

  const state = useSelector(state => {
    return {
      items: state.items,
    }
  })

  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="space-around"
      >
        {state.items.map(item => (
          <Product {...item} key={item.id} />
        ))}
      </Grid>
    </Container>
  )
}

export default Home