import { Grid, Typography, Container } from '@mui/material';
import React, { useContext } from 'react';
import Item from '../components/Item';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { content } = useContext(CartContext);

  if (content.length === 0) {
    return (
      <Container sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh',
      }}
      >
        <Typography variant="h3">Your cart is empty.</Typography>
      </Container>
    );
  }
  return (
    <Grid container spacing={2}>
      {content.map((item) => (
        <Item
          title={item.title}
          image={item.image}
          price={item.price}
          key={item.id}
          id={item.id}
          amount={item.amount}
          description={item.description}
          rating={item.rating}
        />
      ))}
    </Grid>
  );
}

export default Cart;
