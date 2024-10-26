import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
function Cards(){
    return(
        <>
        <div style={{justifyContent:"center"}}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://img.freepik.com/free-vector/butterfly-swarm-silhouette-background_23-2148091300.jpg?t=st=1727362367~exp=1727365967~hmac=16e83f6d2b9be5854fc176d81dc14a5f6b144a4979a1ee5ff944d70fe20f82ef&w=740"
            alt="Butterflies"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Butterflies
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Butterflies are winged insects from the lepidopteran suborder Rhopalocera, characterized by large, often brightly coloured wings that often fold together when at rest, and a conspicuous, fluttering flight.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
    </>
  )
}
export default Cards