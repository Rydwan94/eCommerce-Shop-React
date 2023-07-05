import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaShoppingBag,
  FaInfoCircle,
  FaChevronRight,
} from "react-icons/fa";
import "../css/Navbar.css";

import myImg from "../img/myImg.jpg";

const navItem = [
  {
    pathName: "Dashboard",
    path: "/",
    icon: <FaHome />,
  },
  {
    pathName: "Products",
    path: "/products",
    icon: <FaShoppingBag />,
  },
  {
    pathName: "About us",
    path: "/about",
    icon: <FaInfoCircle />,
  },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  const handleShowNavMobile = () => {
    if (window.innerWidth < 768) {
      setShowNav((prev) => !prev);
    }
    window.scrollTo(0, 0);
  };

  const handleShowNavButton = () => {
    setShowNav((prev) => !prev);
  };

  const navList = navItem.map((item) => (
    <li key={item.path}>
      <NavLink onClick={handleShowNavMobile} to={item.path}>
        {item.icon} <span>{item.pathName}</span>
      </NavLink>
    </li>
  ));

  return (
    <nav className={showNav ? "mobileNavView" : null}>
      <section className={showNav ? "mobileOwnerInfo" : "shopOwnerInfo"}>
        <img src={myImg} alt="owner" />
        <div>
          <p>Shop Owner</p>
          <h4>Łukasz Rydwański</h4>
        </div>
        <button onClick={handleShowNavButton}>
          <FaChevronRight />
        </button>
      </section>
      <hr />
      <ul>
        <p>main</p>
        {navList}
      </ul>
    </nav>
  );
};

export default Navbar;
