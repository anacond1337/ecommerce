import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { CartContext } from '../context/CartContext';

export default function Review() {
  const { content } = useContext(CartContext);
  const products = content;

  function calculateAllPrices() {
    let total = 0;
    content.forEach((element) => {
      total += element.price * element.amount;
    });
    return total.toFixed(2);
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title} />
            <Typography variant="body2">{product.price * product.amount}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {`${calculateAllPrices()} $`}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}
