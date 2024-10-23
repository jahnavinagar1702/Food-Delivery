import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite food here</h2>
        <p>
          Discover a world of culinary delights on our food website, where we
          bring you mouthwatering recipes, expert cooking tips, and in-depth
          guides to global cuisines
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
