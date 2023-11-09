import React, { useState } from "react";
import "./Maincomponent.scss";

const Maincomponent = () => {
  const [cls, setcls] = useState(false);
  return (
    <div className="app-container">
      <header className="header">
        <button className={`btn `} onClick={() => setcls(!cls)}>
          Btn
        </button>
        <h3>Header</h3>
      </header>
      <div className="main-container">
        <aside className={`sidebar ${cls && "btn-hnd"}`}>Sidebar</aside>
        <main className="main-content">
          <div className="image-overlay">
            <img
              src={require("../Pratham.png")}
              alt="Pratham"
              className="img"
            />
            <div className="overlay-text">Pratham</div>
          </div>
        </main>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Maincomponent;
