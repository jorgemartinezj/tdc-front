import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
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
  </Box>;
}

export default App;
