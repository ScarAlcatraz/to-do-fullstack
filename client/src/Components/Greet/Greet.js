import React from "react";
import "./Greet.scss";

const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

function Greet() {
  return (
    <div className="Container">
      <p>Hello, what's on your mind?</p>
      <div> It's {date}</div>
    </div>
  );
}

export default Greet;
