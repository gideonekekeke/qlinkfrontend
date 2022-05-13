
import React, { useContext, useState } from "react";
// import logo from "../Components/img/10.png";
import { Link, useNavigate } from "react-router-dom";

import "./nav.css";
// import signUpModal from "../Components/SignUp/SignUpModal";

function MainNav() {
  const hist = useNavigate();

  
  const [moveNav, setMoveNav] = useState(false);

  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onMoveNav = () => {
    if (window.scrollY >= 70) {
      setMoveNav(true);
    } else {
      setMoveNav(false);
    }
  };
  window.addEventListener("scroll", onMoveNav);

  return (
    <>
      <div
        className={moveNav ? "your_nav" : "my_nav"}
        style={{
        //   height: "70px",
          top: 0,
          position: "sticky",
          zIndex : "10"
          // backgroundColor: "red",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
            top: 0,
            position: "sticky",

            // backgroundColor: "white",

            cursor: "pointer",
          }}
        >
        
          <div
            className="navtext"
            style={{
              width: "50%",
              // background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              height: "100%",
              fontFamily: "poppins",
              fontSize: "15px",
            }}
          >
            {/* <Link to="/" style={{ textDecoration: "none", color: "white" }}> */}
            <div
              onClick={() => {
                hist.push("/");
              }}
              className="navtext"
            >
              Home
            </div>
            {/* </Link> */}
            <div className="navtext">About</div>

            <div
              onClick={() => {
                hist.push("/contact");
              }}
              className="navtext"
            >
              Contact
            </div>
            <div className="navtext">Services</div>
          </div>
          {/* <div className="sidebar">Menu</div> */}

        
        </div>
      </div>
    </>
  );
}

export default MainNav;