import React from "react";
import Container from '@mui/material/Container'
import './Feed.css'
import Post from '../Feed/Post/Post'
function Feed(){

    return(
        <>
            <Container id='container-feed'>
                <Post />
                <Post />
                <Post />

            </Container>
        </>
    )
}
export default Feed;