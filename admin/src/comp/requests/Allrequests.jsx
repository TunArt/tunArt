import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import  "../../App.css"


function Allrequests({ e, setRender, render }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const accept = () => {
    try {
      console.log('yo');
      const res =  axios.put(`http://localhost:3000/api/artworks/acceptsTheArtWork/${e.id}`, {
        verified: true 
      });
      console.log("hi");
      console.log(res);
      setRender(!render);

    } catch (error) {
      console.log(error);
    }
  }

console.log(e)
  return (
<div className='list'>
  
    <Card sx={{ maxWidth: 345 }}>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        />
      <CardMedia
        component="img"
        height="194"






        image={JSON.parse (e.image)[0].length===1 ? JSON.parse (e.image) :JSON.parse (e.image)[0]}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {e.name}<br/>
        {e.price}
        </Typography>
      </CardContent>
      
        
        <Button variant="contained"  startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />} onClick={()=>{accept()}}>
  Accept
</Button>
       

</Card>
</div>
  )
}

export default Allrequests
