import React from "react";

function Navbar(props) {
  const data1 = props.data1;
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div>
            <li>
              <img src={data1[0]} alt="Logo" className="logo" />
            </li>
          </div>
          <div className="d-flex gap-5">
            <li className="nav-link active" aria-current="page">
              <a href="#">{data1[1]}</a>
            </li>
            <li>
              <a href="#">{data1[2]}</a>
            </li>
            <li>
              <a href="#">{data1[3]}</a>
            </li>
            <li>
              <a href="#">{data1[4]}</a>
            </li>
            <li>
              <a href="#">{data1[5]}</a>
            </li>
            <li>
              <a href="#">{data1[6]}</a>
            </li>
          </div>
          <div className="d-flex gap-2">
            <li
              style={{
                border: "1px solid #f5b754",
                borderRadius: "50%",
              }}
            >
              <i
                className="fa-solid fa-phone-volume"
                style={{ color: "#ffffff", margin: "15px" }}
              ></i>
            </li>
            <div className="contact-info1">
              <li >{data1[7]}</li>
              <li>
                <a href="#">{data1[8]}</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
