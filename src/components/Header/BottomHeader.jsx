import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import UserDropdown from "./UserDropdown";
import "./Styles/Header.css";
export const BottomHeader = ({ Links, Icons }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalQuantity } = useCart();
  const { isAuthenticated, user, logout } = useUser();

  const searchIcon = Icons.find((icon) => icon.name === "search").src;
  const otherIcons = Icons.filter((icon) => icon.name !== "search");

  return (
    <div className="bottom-header">
      <div className="container">
        <div className="left-section">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1>Exclusive</h1>
          </Link>

          {/* زر البرجر */}
          <button
            className="burger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* القائمة المنسدلة */}
          <div className={`links ${menuOpen ? "show" : ""}`}>
            <div className="Topslide">
              {/* البحث داخل القائمة */}
              <div className="mobile-search">
                <input type="text" placeholder="What are you looking for?" />
                <img src={searchIcon} alt="search" />
              </div>

              {/* الأيقونات داخل المينو */}
              <div className="mobile-icons">
                <Link to="/cart" style={{ position: "relative" }}>
                  <img
                    src={Icons.find((i) => i.name === "cart").src}
                    alt="cart"
                  />
                  {totalQuantity > 0 && (
                    <span className="cart-badge-mobile">{totalQuantity}</span>
                  )}
                </Link>
                <Link to="#">
                  <img
                    src={Icons.find((i) => i.name === "heart").src}
                    alt="wishlist"
                  />
                </Link>
              </div>
            </div>

            <Link to="/" className="active" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="#" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link to="#" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            {isAuthenticated ? (
              <>
                <span className="user-greeting">Hello, {user?.name}</span>
                <button
                  className="logout-btn-mobile"
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                SignUp
              </Link>
            )}
          </div>
        </div>

        {/* القسم الأيمن لسطح المكتب */}
        <div className="right-section">
          <div className="search">
            <input type="search" placeholder="What are you looking for ?" />
            <img src={searchIcon} alt="search" />
          </div>

          <div className="icons-header">
            <Link to="/cart">
              <img
                src={Icons.find((i) => i.name === "heart").src}
                alt="wishlist"
              />
            </Link>

            <Link to="/cart" style={{ position: "relative" }}>
              <img src={Icons.find((i) => i.name === "cart").src} alt="cart" />
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </Link>

            {/* ✅ قائمة المستخدم المنسدلة */}
            {isAuthenticated ? (
              <UserDropdown user={user} logout={logout} Icons={Icons} />
            ) : (
              <Link to="/login" className="login-link">
                <img
                  src={Icons.find((i) => i.name === "User").src}
                  alt="User"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
