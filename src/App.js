import "./styles.css";
import React from "react";

//import './App.css';

import MainBody from "./components/MainBody";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      {/* <Routes /> */}
      {/* <Footer/> */}
      {/* <Header /> */}
      <MainBody
        handleclickopen={handleClickOpen}
        handleclose={handleClose}
        open={open}
      />
    </div>
  );
}

export default App;
