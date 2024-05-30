import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import NuevoProducto from './productos/NuevoProductoComponent';

// columnas para la tabla de productos
const columns = [
  { field: 'sku', headerName: 'SKU', width: 150 },
  { field: 'nombre', headerName: 'Nombre', width: 200 },
  { field: 'precio', headerName: 'Precio', width: 130, valueGetter: (value, row) => `$ ${row.precio}`, },
  { field: 'descripcion', headerName: 'Descripción', width: 250 },
];

/**
 * Componente Productos
 *
 * @returns
 */
function Productos() {
  // state para la lista de productos
  const [ productos, setProductos ] = useState([]);
  // state de la modal
  const [ openModal, setOpenModal ] = useState(false);

  useEffect(() => {
    obtenerProductos()
  }, []);

  const obtenerProductos = () => {
    fetch('https://tdc-services-b3ce34c2e41d.herokuapp.com/api/v1/productos')
      .then(response => response.json())
      .then(json => setProductos(json.data))
      .catch(error => console.error(error));
  }

  return <Grid
    container
    direction="row"
    flexDirection={'column'}>
      <Grid
        container
        flexDirection={'row'}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Productos
        </Typography>

        <Button onClick={() => setOpenModal(true)}>Nuevo Producto</Button>
      </Grid>

      <div style={{ marginTop: '12px' }}>
        <DataGrid
          rows={productos}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>

      <NuevoProducto
        openModal={openModal}
        handleOnCloseModal={() => setOpenModal(false)}
        handleOnObtenerProductos={obtenerProductos}
      />
  </Grid>
}

export default Productos;
