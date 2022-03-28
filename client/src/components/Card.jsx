import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

export default function MediaCard({ card }) {
  return !card ? null : (
    <Card sx={{ maxWidth: 345, height: 500, marginRight: 5, marginBottom: 5 }} component={'div'}>
      <CardMedia
        component="img"
        height="400"
        width="100"
        image={card.image}
        alt="image of card"
      />
      <CardContent component={'div'}>
        <Typography gutterBottom variant="h5" component={"p"}>
          {card.points > 0 ? `+${card.points}` : `${card.points}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'p'}>
          {card.cardRules}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'p'}>
          {card.tags ? (card.tags.split(',')).map((tag) =>
            `#${tag.trim()}`) : null}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'p'}>
          {card.createdBy ? card.createdBy : 'no creator'}
        </Typography>
      </CardContent>
    </Card>
  );
}
