
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';

import NoteIcon from '@mui/icons-material/Note';


export default function Header() {

    return (
        <header>

            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton size="large" sx={{ display: { color:"#fff"}}}>
                        <NoteIcon fontSize='large' height="4rem" sx={{ display: { xs: 'flex', color: '#fff' }, mr: 1 }} />
                    </IconButton>
                <Typography
                    variant="h4"
                    noWrap
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: '#fff',
                    textDecoration: 'none',
                    }}
                >
                    KeeperApp
                </Typography>

                <Typography
                    variant="h3"
                    noWrap
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: '#fff',
                    textDecoration: 'none',
                    }}
                >
                    KeeperApp
                </Typography>
                </Toolbar>
            </Container>
        </header>
    );
};