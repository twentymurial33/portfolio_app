import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Avatar from '@mui/material/Avatar';
import { LayoutContainer } from '../components/styled';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function RecipeReviewCard() {
  return (
    <LayoutContainer>
    <Header/>
    <Card sx={{ maxWidth: 345 }} style={{marginLeft:"38%", marginTop:"80px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            MA
          </Avatar>
        }
        title="About Me"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Software Engineer with a background in Program Management.
         I fell in love with coding after several years supporting
        engineers build products.Spent the last 2 years honing my skills by working on open source
        and side projects using Javascript and its frameworks React and
        Typescript.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
    <FavoriteIcon />
    </IconButton>
    </CardActions>
    </Card>
    <Footer/>
    </LayoutContainer>
  );
}
