import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({card}) {
  return !card ? null : (
    <Card sx={{ maxWidth: 345, height: 500, marginRight: 5 }}>
      <CardMedia
        component="img"
        height="400"
        width="100"
        image={card.image}
        alt="image of card"
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          {card.title}
        </Typography> */}
        <Typography gutterBottom variant="h5" component="div">
          {card.points > 0 ? `+${card.points}` : `${card.points}` }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.cardRules}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          #{card.tags}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {card.date}
        </Typography> */}
      </CardContent>
    </Card>
  );
}


// ----------------------------------old code might be trash now ---------------------------
/*
  <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions>

  this issue here is being caused by the date being passed into the card
  because it is a function

*/