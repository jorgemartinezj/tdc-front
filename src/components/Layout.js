import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Grid } from '@mui/material';

/**
 * Componente Layout
 *
 * @param {object} props
 * @returns
 */
function Layout({ children }) {
  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TDC
        </Typography>
        <Button color="inherit">Productos</Button>
        <Button color="inherit">Plazos</Button>
      </Toolbar>
    </AppBar>

    <div style={{ marginTop: '12px' }}>
      <Container fixed>
        <Grid
          container
          direction="row"
          alignItems="center"
          p={3}
        >
          { children }
        </Grid>
      </Container>
    </div>
  </Box>;
}

export default Layout;
