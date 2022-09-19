import  React from 'react';
import { Button, ButtonGroup } from '@mui/material'
import { Delete } from '@mui/icons-material'
function Component(){

    return(
        <>
            <h1>React Material UI</h1>
            <button>Click Me</button>
            <Button 
            variant='outlined'
            color="success" 
            size='small'
            endIcon={<Delete/>}
            >MUI Button</Button>
            <ButtonGroup orientation='horizontal'>
                <Button variant='outlined'>One</Button>
                <Button variant='contained' >Two</Button>
                <Button variant='outlined'>Three</Button>
            </ButtonGroup>
        </>
    )
}
export default Component;