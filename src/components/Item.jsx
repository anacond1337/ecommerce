/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
  CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Item({
  title, image, price, description, rating,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>
        <Typography>{`${price} $`}</Typography>
        <Rating value={rating.rate} readOnly />
      </CardActions>
    </Card>

  );
}

export default Item;
