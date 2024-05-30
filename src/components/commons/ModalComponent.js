import { Box, Modal, Typography } from '@mui/material';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '12px',
  p: 4,
};

/**
 * ModalComponent
 *
 * @param {object} props
 * @returns
 */
function ModalComponent({ titulo, subtitulo, children, open, handleOnClose }) {
  return <Modal
    open={open}
    onClose={handleOnClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        { titulo }
      </Typography>

      <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
        { subtitulo }
      </Typography>

      { children }
    </Box>
  </Modal>
}

export default ModalComponent;
