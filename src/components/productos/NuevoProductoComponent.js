import React, { useState } from 'react';
import ModalComponent from '../commons/ModalComponent';
import { Button, FormControl, Snackbar } from '@mui/material';
import TextFieldComponent from '../commons/TextFieldComponent';

/**
 * NuevoProductoComponent
 *
 * @param {object} props
 * @returns
 */
function NuevoProductoComponent({ openModal, handleOnCloseModal, handleOnObtenerProductos }) {
  // state para el formulario del producto
  const [ producto, updateProducto ] = useState({
    sku: '',
    nombre: '',
    descripcion: '',
    precio: '',
  });

  // state para el snackbar
  const [ snackbar, updateSnackbar ] = useState({
    open: false,
    message: ''
  });

  // intenta grabar el producto en la base de datos
  const guardarProducto = async () => {
    fetch('https://tdc-services-b3ce34c2e41d.herokuapp.com/api/v1/productos', {
      method: 'post',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify(producto),
    })
      .then(async (response) => {
        const data = await response.json();

        if (response.status === 400) { // si el servicio regrese algun error
          updateSnackbar({
            message: data.mensaje,
            open: true
          });

          return;
        }

        handleOnObtenerProductos();
        handleOnCloseModal();
        updateSnackbar({
          message: 'Se ha agregado un nuevo producto.',
          open: true
        });

        updateProducto({ // reinicia el state del formulario de producto
          sku: '',
          nombre: '',
          descripcion: '',
          precio: '',
        });
      })
      .catch(error => console.error(error));
  };

  const handleOnChangeProducto = (propiedad) => {
    updateProducto({ ...producto, ...propiedad })
  };

  // evento de cierre de la modal
  const handleOnClose = () => {
    updateProducto({
      sku: '',
      nombre: '',
      descripcion: '',
      precio: '',
    });

    handleOnCloseModal();
  }

  return <div>
    <ModalComponent
      titulo={'Nuevo Producto'}
      subtitulo={'Capture la información para crear un nuevo producto.'}
      open={openModal}
      handleOnClose={handleOnClose}>
      <div>
        <div style={{ marginTop: '12px' }}>
          <FormControl fullWidth>
            <TextFieldComponent id="sku" label="SKU" value={producto.sku} handleOnChange={e => handleOnChangeProducto({ sku: e.target.value })} />
            <TextFieldComponent id="nombre" label="nombre" value={producto.nombre} handleOnChange={e => handleOnChangeProducto({ nombre: e.target.value })} />
            <TextFieldComponent id="descripcion" label="descripcion" value={producto.descripcion} handleOnChange={e => handleOnChangeProducto({ descripcion: e.target.value })} />
            <TextFieldComponent id="precio" label="precio" value={producto.precio} handleOnChange={e => handleOnChangeProducto({ precio: e.target.value })} />
          </FormControl>
        </div>

        <Button onClick={guardarProducto}>Guardar Producto</Button>
      </div>
    </ModalComponent>

    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={snackbar.open}
      autoHideDuration={3000}
      onClose={() => updateSnackbar({ ...snackbar, open: false })}
      message={snackbar.message}
    />
  </div>;
}

export default NuevoProductoComponent;
