/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  Card,
  CardActions, CardContent, Grid, IconButton, Rating, Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from '../context/CartContext';

function Item({
  title, image, price, description, rating, id,
}) {
  const { dispatch } = useContext(CartContext);

  function handleAddToCart() {
    dispatch({ type: 'ADD', payload: id });
  }

  return (
    <Grid item>
      <Card sx={{ width: 345, height: 500 }}>
        <Typography variant="h5" sx={{ whiteSpace: 'nowrap', overflowX: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </Typography>
        <img
          height="194"
          src={image}
          loading="lazy"
          alt={title}
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
        <CardContent sx={{ height: '35%', overflowY: 'auto' }}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'start' }}>
          <IconButton onClick={handleAddToCart}>
            <AddShoppingCartIcon />
          </IconButton>
          <Typography>{`${price} $`}</Typography>
          <Rating value={rating.rate} readOnly />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;
