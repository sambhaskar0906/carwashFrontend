import React from 'react';
import { Typography, Stack, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const TodoPack = (props) => {
    return (
        <>
            <Grid xs={12} direction={'column'}>
                <Stack spacing={2} direction={'row'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    sx={{
                        backgroundColor: '#fdfdfd',
                        borderRadius: '5px',
                        py: '5px',
                        pl: 2,
                        // my: 1,
                        mx:'auto',
                    }}>
                    <Typography color='black'>{props.text}</Typography>
                    <IconButton edge="end" aria-label="delete">
                        <CloseIcon sx={{
                            color: 'black'
                        }}
                            onClick={() => {
                                props.onSelect(props.id)
                            }} />
                    </IconButton>
                </Stack>
            </Grid>
        </>
    )
}

export default TodoPack;