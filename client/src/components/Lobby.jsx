// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Home from './Home.jsx'
// import DrawingArea from './DrawingArea';
// import CanvasDraw from "react-canvas-draw";
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';


// export default function Lobby() {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [showCanvas, setShowCanvas] = useState(false)

//   // const handleClick = function () {
//   //   setShowCanvas(!showCanvas);
//   // }

//   return (
//     <div>
//       <h1>Lobby</h1>
//       <div>
//         <Button onClick={handleOpen} varaint="contained" color="primary">Add a Card</Button>
//         {/* <DrawingArea /> */}


//         {/* {showCanvas ? */}
//           <Modal
//             open={open}
//             onClose={handleClose}
//             // aria-labelledby="modal-modal-title"
//             // aria-describedby="modal-modal-description"
//           >
//             <CanvasDraw />
//           </Modal>
//           {/* : null} */}
//       </div>
//       <Link to="/Game">Go to Game!</Link>
//       {/* <br /> */}
//       <Link to="/">Exit</Link>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Modal} from '@mui/material';
import CanvasDraw from "react-canvas-draw";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [openCanvas, setCanvasOpen] = useState(false);
  const handleCanvasOpen = () => setCanvasOpen(true);
  const handleCanvasClose = () => setCanvasOpen(false);
  const [selectedColor, setSelectedColor] = useState('red');

  const [openDeck, setDeckOpen] = useState(false);
  const handleDeckOpen = () => setDeckOpen(true);
  const handleDeckClose = () => setDeckOpen(false);

  return (
    <div>
      <h1>Lobby</h1>
      <div>
        <h4>Players</h4>
        <div>Player 1</div>
        <div>Player 2</div>
        <div>Player 3</div>
        <div>Player 4</div>
      </div>
      <Button onClick={handleCanvasOpen}>Add A Card!</Button>
      <Modal
        open={openCanvas}
        onClose={handleCanvasClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Draw Below!:
          </Typography>
          <CanvasDraw brushColor={selectedColor}/>
        </Box>
      </Modal>

      <div>
      <div>
      <Button onClick={handleDeckOpen}>Edit Deck</Button>
      <Modal
        open={openDeck}
        onClose={handleDeckClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Library || Current Deck
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          </Typography>
        </Box>
      </Modal>
      </div>
        <Link to="/Game">START GAME</Link>
        <br />
        <Link to="/">Exit</Link>
      </div>
    </div>
  );
}