/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import {
  Card,
  CardActions, CardContent, Grid, IconButton, Rating, Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartContext } from '../context/CartContext';

function Item({
  title, image, price, description, rating, id, amount,
}) {
  const { dispatch } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  function handleAddToCart() {
    setIsAdded(true);
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id, title, image, price, description, rating, amount,
      },
    });
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
          {amount > 0 ? (
            <>
              <IconButton onClick={() => dispatch({ type: 'DECREMENT', payload: id })}>
                <RemoveIcon />
              </IconButton>
              <Typography>
                {amount}
              </Typography>
              <IconButton onClick={() => dispatch({ type: 'INCREMENT', payload: id })}>
                <AddIcon />
              </IconButton>
              <Typography>{`${price * amount} $`}</Typography>
            </>

          ) : (
            <>
              <IconButton disabled={isAdded} onClick={handleAddToCart}>
                <AddShoppingCartIcon />
              </IconButton>
              <Typography>{`${price} $`}</Typography>
              <Rating value={rating.rate} readOnly />
            </>
          )}

        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;
