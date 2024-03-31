import React from "react";
import "./App.scss";
import Details from "./Details";

function PageHeader() {
  return (
    <div className="frameHeader">
      <div className="headerContainer">
        <div className="rightHeader">
          <img src="/icons/xtar-menu.svg" alt="hamburgerMenu" />
          <div className="profileName">ישראל ישראלי</div>
        </div>
        <img className="logoImg" alt="logo" />
      </div>
    </div>
  );
}

function Picture() {
  return (
    <img
      className="sidePicture"
      src="/icons/pic.svg"
      alt="woman with her laptop"
    />
  );
}


function App() {
  return (
    <>
      <PageHeader />
      <div className="body">
        <Details />
        <Picture />
      </div>
    </>
  );
}

export default App;
