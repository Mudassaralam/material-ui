import React from "react";
import Container from '@mui/material/Container'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import image from './Images/logo.jpg'
import './post.css'
function Post(){

    return(
        <>
            
            <Card className="main-card">
                <CardActionArea >
                    <CardMedia className="Media" image={image}
                    title='My Post'
                    />
                    <CardContent>
                        <Typography variant="h5" gutterBottom > My First Post</Typography>
                        <Typography variant="body2" > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary">Learn More</Button>

                </CardActions>
            </Card>
          
        </>
    )
}
export default Post;