/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
  CardActions, CardContent, Grid, IconButton, Rating, Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Item({
  title, image, price, description, rating,
}) {
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
          <IconButton>
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
