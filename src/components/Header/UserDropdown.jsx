import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const UserDropdown = ({ user, logout, Icons }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="user-dropdown-container" ref={dropdownRef}>
      <div className="user-trigger" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={Icons.find((i) => i.name === "User").src}
          alt="User"
          className="user-avatar"
        />
      </div>

      {isOpen && (
        <div className="user-dropdown-menu">
          <p className="dropdown-username">{user?.name}</p>
          <Link to="/profile" className="dropdown-link">
            Profile
          </Link>
          <button className="dropdown-logout" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
