import React, { useState } from "react";

function Navbar(props) {
  const data1 = props.data1;
  const [menuHeight, setMenuHeight] = useState("0px");

  const toggleMenu = () => {
    setMenuHeight(menuHeight === "0px" ? "300px" : "0px");
  };
  return (
    <>
      <nav className="navbar">
        <div className="header-logo">
          <img src={data1[0]} className="header-logo-img" alt="Logo" />
        </div>
        <ul
          id="menuList"
          style={{
            maxHeight: menuHeight,
            transition: "max-height 0.3s ease-out",
          }}
        >
          <li>
            <a href="#hero-section">{data1[1]}</a>
          </li>
          <li>
            <a href="#about-section">{data1[2]}</a>
          </li>
          <li>
            <a href="#services-section">{data1[3]}</a>
          </li>
          <li>
            <a href="#cars-section">{data1[4]}</a>
          </li>
          <li>
            <a href="#carstype-section">{data1[5]}</a>
          </li>
          <li>
            <a href="#contact-section">{data1[6]}</a>
          </li>
          <li>
            <div className="header-fa-icons">
              <i
                className="fa-solid fa-phone-volume"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </li>
          <div>
            <li className="header-contact">{data1[7]}</li>
            <li>
              <a href="#">{data1[8]}</a>
            </li>
          </div>
        </ul>
        <div className="menu-icon pe-3">
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
