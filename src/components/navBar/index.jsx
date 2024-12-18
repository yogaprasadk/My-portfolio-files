import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss"; 

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(prevState => !prevState);
  };

  const handleMenuItemClick = () => {
    setToggleIcon(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <FaReact size={30} />
        </Link>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
        <ul className="navbar__menu">
          {data.map((item, index) => (
            <li key={index} className="navbar__menu__item">
              <Link
                className="navbar__menu__item__link"
                to={item.to}
                onClick={handleMenuItemClick} // Close menu on link click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`navbar__popup ${toggleIcon ? "active" : ""}`}>
          <ul className="navbar__popup__menu">
            {data.map((item, index) => (
              <li key={index} className="navbar__popup__menu__item">
                <Link
                  className="navbar__popup__menu__item__link"
                  to={item.to}
                  onClick={handleMenuItemClick} // Close menu on link click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
