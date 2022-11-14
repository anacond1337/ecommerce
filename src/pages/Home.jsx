import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Container, Typography, CircularProgress, Grid,
} from '@mui/material';
import SignalWifiBadIcon from '@mui/icons-material/SignalWifiBad';
import Item from '../components/Item';
import { CartContext } from '../context/CartContext';

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products/');
  return res.json();
}

function Home() {
  const { searchField } = useContext(CartContext);
  const {
    data, isLoading, isError,
  } = useQuery(
    ['product'],
    fetchProducts,
  );

  if (isLoading) {
    return (
      <Container
        sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh', flexDirection: 'column',
        }}
      >
        <CircularProgress />
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '90vh',
          flexDirection: 'column',
        }}
      >
        <SignalWifiBadIcon />
        <Typography color="error">Failed to load the page!</Typography>
      </Container>
    );
  }
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={2}>
        {data.map(((product) => {
          if (searchField === '') {
            return (
              <Item
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
                rating={product.rating}
                id={product.id}
                amount={0}
              />
            );
          }

          if (product.title.includes(searchField)) {
            return (
              <Item
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
                rating={product.rating}
                id={product.id}
                amount={0}
              />
            );
          }
          return null;
        }))}
      </Grid>
    </Container>
  );
}

export default Home;
