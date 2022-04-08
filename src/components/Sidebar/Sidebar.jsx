import React, { useState } from "react";

import "./Sidebar.css";

const Sidebar = () => {

  const [active, setactive] = useState("All Items")

  return (
    <>
      <div className="sidebar-container">
        <p className="p-categories">Categories</p>
        <ul className="p-categories-list">
          <li>
            <div className={active === "All Items" ? "active" : "list-item"} onClick={() => setactive("All Items")}><p>All Items</p></div>
          </li>
          <li>
            <div className={active === "Bird" ? "active" : "list-item"} onClick={() => setactive("Bird")}><p>Bird</p></div>
          </li>
          <li>
            <div className={active === "Cat" ? "active" : "list-item"} onClick={() => setactive("Cat")}><p>Cat</p></div>
          </li>
          <li>
            <div className={active === "Dog" ? "active" : "list-item"} onClick={() => setactive("Dog")}><p>Dog</p></div>
          </li>
          <li>
            <div className={active === "Fish" ? "active" : "list-item"} onClick={() => setactive("Fish")}><p>Fish</p></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
