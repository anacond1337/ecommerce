import { Container, Typography, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SignalWifiBadIcon from '@mui/icons-material/SignalWifiBad';

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products/');
  return res.json();
}

function Home() {
  const {
    data, isLoading, isError,
  } = useQuery(
    ['product'],
    fetchProducts,
  );
  console.log(data);

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
    <Container>
      
    </Container>
  );
}

export default Home;
