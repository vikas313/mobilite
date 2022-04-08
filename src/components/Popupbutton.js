import React from "react";
import { Button } from "@mui/material";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import DialogTitle from "@mui/material/DialogTitle";

const Popupbutton = (props) => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="collectionbtn">
            <Button
              className="colbtn1"
              variant="contained"
              onClick={props.handleclickopen}
            >
              <i class="uil uil-plus-circle"></i>
              <br />
              create
              <br />
              ERC-721
            </Button>
            <Button variant="contained" className="colbtn1">
              Fungy
              <br />
              fungy
            </Button>
            <Dialog open={props.open} onClose={props.handleclose}>
              <DialogTitle style={{ color: "#039BE4" }}>Collection</DialogTitle>

              <div className="popbox">
                <div className="profilepic"></div>
                <p className="makinline">
                  we recommeend an image of atleast 400 x 400. Gifs work too.
                </p>
              </div>
              <Button variant="outlined" className="choosefile">
                CHOOSE FILE
              </Button>

              <h2>Display Name</h2>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Enter Token Name"
                type="text"
                fullWidth
                variant="standard"
              />
              <p>Token name cannot be changed in future</p>
              <h2>Symbol(required)</h2>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Enter Token Symbol"
                type="text"
                fullWidth
                variant="standard"
              />
              <h2>Description(optional)</h2>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Spread some words about your token colletion"
                type="text"
                fullWidth
                variant="standard"
              />
              <h2>short url</h2>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Fungy.com/Enter short url"
                type="text"
                fullWidth
                variant="standard"
              />
              <p>Will be used as public url</p>

              <DialogActions>
                <Button
                  className="createcollectionbtn"
                  onClick={props.handleclose}
                >
                  {" "}
                  Create Collection
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popupbutton;
