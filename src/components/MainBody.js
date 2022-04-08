import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";

import TextField from "@mui/material/TextField";

import Popupbutton from "./Popupbutton";

export class MainBody extends Component {
  // const { classes } = this.props

  render() {
    return (
      <>
        <Header />
        <div style={{ backgroundColor: "white" }} className="twoboxes">
          <h1 style={{ textAlign: "left", marginLeft: "8vw" }}>
            Create your collection
          </h1>
          <div className={"grid"}>
            <div>
              <h2 className="upload">Upload file</h2>
              <div className="imgdiv">
                <img
                  src="https://agreemtech.com/wp-content/uploads/2021/05/information-technology.jpg"
                  alt=""
                  height="180"
                  width="380"
                />
              </div>
            </div>
            <div>
              <h2 className="upload">Preview</h2>
              <div className="imgdiv2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizlqeVg3UnMoBFJYV85b7TyUtAnzY_nYz--lyFHMq375ZTveMYCXsAFNdlFOYFPunWac&usqp=CAU"
                  alt=""
                  height="180"
                  width="380"
                />
                <br />

                <Button variant="contained" className="col">
                  6h 38m 22s left
                </Button>
                <br />
                <h4>lorem ipsium</h4>
                <br />
                <p>minimum bid 1/1</p>
                <br />
                <b>154 ETH</b>
              </div>
            </div>
            <div>
              <h2 className="upload">Upload Cover</h2>

              <div className="imgdiv3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85DN83QVXWHzi9t0xLapqSzJjLs37ib6hG33Hd_L30E27Zm0FBu0TjQ_StTi6Si3moEI&usqp=CAU"
                  alt=""
                  height="180"
                  width="380"
                />
              </div>
            </div>
          </div>

          <section className="twoboxes">
            <h3>Set a period of time for which buyers can pl lorem ipsium</h3>
            <section className="secflex">
              <p className="sec1">
                <i class="uil uil-tag"></i>
                <br />
                Fixed Price
              </p>

              <p className="sec2">
                <i class="uil uil-bitcoin-circle"></i>
                <br />
                Timed Auction
              </p>
            </section>
          </section>

          <form className="twoboxes">
            <span>
              <b>Minimum Bid</b>
            </span>
            <br />
            <TextField
              id="standard-basic"
              label="0.054           ETH"
              variant="standard"
            />
            <Typography gutterBottom variant="" component="div">
              Bids below this amount wont be allowed
            </Typography>
            <div className="startdate">
              <span>
                <b>Starting Date</b>
              </span>
              <span>
                <b>Expiration Date</b>
              </span>
            </div>
            <br />
            <div className="listing">
              <TextField
                className="text1"
                id="standard-select-currency-native"
                select
                label="Right after listing"
                variant="standard"
              ></TextField>
              <TextField
                className="text1"
                id="standard-select-currency-native"
                select
                label="1 Day"
                variant="standard"
              ></TextField>
            </div>
            <span className="texttag">
              Any bids placed in the last ten minutes extends the auction by 10
              minutes
            </span>
            <h4 style={{ color: "blue" }}>
              Learn more how timed auctions work
            </h4>
            <h3 style={{ color: "blue", display: "inline-block" }}>
              Unlock once purchased{" "}
            </h3>
            <input type="checkbox" />
            <h4>Content will be unlocked after successfull transaction</h4>
            <TextField
              className="digital"
              id="standard-basic"
              label="Digital key,code to redeem or to link a file"
              variant="standard"
            />
            <p>Mark down is supported</p>
            <p>Unicode symbols are Not supported</p>
            <h1>Choose collection</h1>
            <Popupbutton
              handleclickopen={this.props.handleclickopen}
              handleclose={this.props.handleclose}
              open={this.props.open}
            />
            <h3>Title</h3>
            <TextField
              id="standard-basic"
              label="eg : 'redeamable T-shirt with logo'"
              variant="standard"
            />
            <br />
            <h3>Description</h3>
            <TextField
              id="standard-basic"
              label="eg : 'redeamable T-shirt with logo'"
              variant="standard"
            />
            <p>with preserved line breaks</p>
            <br />
            <h3>Royalties</h3>
            <TextField
              id="standard-basic"
              label="eg : 'redeamable T-shirt with logo'"
              variant="standard"
            />
            <p>suggested:0%,10%,20%,30%</p>
            <Button className="buttonhide" variant="outlined">
              HIDE ADVANCED SETTINGS
            </Button>
            <br />
            <h3>Properties(optional)</h3>
            <div className="properties">
              <TextField
                className="proper1"
                id="standard-basic"
                label="eg : size"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="eg : M"
                variant="standard"
              />
            </div>
            <br />
            <h3>Alternative text for NFT(optional)</h3>
            <TextField
              style={{ width: "40vw" }}
              id="standard-basic"
              label="image description in details(do not start with word image)"
              variant="standard"
            />
            <p>Text that will be used for persons with disabilities</p>
            <div className="createbtn">
              <Button
                className="createitem"
                variant="outlined"
                onClick={this.props.handleclickopen}
              >
                CREATE ITEM
              </Button>
              <span>saved 3minutes ago?</span>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default MainBody;
