import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="foot">
        <div className="leftfoot">
          <p style={{ marginLeft: "10vw" }}>Follow us</p>
          <div className="unordered">
            <ul>
              QUICK LINK
              <li>Explore</li>
              <li>How it works</li>
              <li>Support</li>
              <li>Become a partner</li>
            </ul>
            <ul>
              COMMUNITY
              <li>Rari Token</li>
              <li>Discussion</li>
              <li>voting </li>
              <li>Suggest Features</li>
            </ul>
            <ul>
              {" "}
              Help center
              <li>Terms and conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="rightfoot">
          <h4>STAY IN THE LOOP</h4>
          <p>
            Joining our mailing list to stay in the loop we are a newest feature
            <br /> release,NFT drops, and tips and tricks for navigating fungy
          </p>
          <TextField
            id="outlined-basic"
            label="Your email address"
            variant="outlined"
          />
          <Button color="inherit">CREATE ITEM</Button>
          <h4>KEEP IN TOUCH</h4>
          <TextField id="outlined-basic" label="Your name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <br />
          <TextField
            id="outlined-basic"
            label="Leave your message"
            variant="outlined"
          />
          <Button variant="outlined">SEND</Button>
        </div>
      </div>
    </>
  );
};
export default Footer;

//   return (
//     <Box>
//       <h1 style={{ color: "green", textAlign: "center", marginTop: "-50px" }}>
//         Mobilitee
//       </h1>
//       <Container>
//         <Row>
//           <Column>
//             <Heading> Follow us </Heading>
//             <FooterLink href="#"> Lindlin</FooterLink>
//             <FooterLink href="#">facebook</FooterLink>
//             <FooterLink href="#">Twitter</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Services</Heading>
//             <FooterLink href="#">Writing</FooterLink>
//             <FooterLink href="#">Internships</FooterLink>
//             <FooterLink href="#">Coding</FooterLink>
//             <FooterLink href="#">Teaching</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Contact Us</Heading>
//             <FooterLink href="#">Uttar Pradesh</FooterLink>
//             <FooterLink href="#">Ahemdabad</FooterLink>
//             <FooterLink href="#">Indore</FooterLink>
//             <FooterLink href="#">Mumbai</FooterLink>
//           </Column>
//           <Column>
//             <Heading> Stay in the loop</Heading>
//             <FooterLink href="#">
//               <i className="fab fa-facebook-f">
//                 <span style={{ marginLeft: "10px" }}>Signup</span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>Login</span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-twitter">
//                 <span style={{ marginLeft: "10px" }}>Send</span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-youtube">
//                 <span style={{ marginLeft: "10px" }}>Youtube</span>
//               </i>
//             </FooterLink>
//           </Column>
//         </Row>
//       </Container>
//     </Box>
//   );
// };
