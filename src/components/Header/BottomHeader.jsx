import React, { useState } from "react";

export const BottomHeader = ({ Links, Icons }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const searchIcon = Icons.find((icon) => icon.name === "search").src;
  const otherIcons = Icons.filter((icon) => icon.name !== "search");

  return (
    <div className="bottom-header">
      <div className="container">
        <div className="left-section">
          <h1>Exclusive</h1>

          {/* 🔹 زر البرجر */}
          <button
            className="burger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* 🔹 القائمة المنسدلة */}
          <div className={`links ${menuOpen ? "show" : ""}`}>
            <div className="Topslide">
              {/* 🧭 البحث داخل القائمة */}
              <div className="mobile-search">
                <input type="text" placeholder="What are you looking for?" />
                <img src={searchIcon} alt="search" />
              </div>

              {/* 🛒 الأيقونات داخل المينو */}
              <div className="mobile-icons">
                {otherIcons.map((icon) => (
                  <a key={icon.name} href="#">
                    <img src={icon.src} alt={icon.name} />
                  </a>
                ))}
              </div>
            </div>
            {Links.map((link) => (
              <a
                key={link.title}
                href="#"
                className={link.isActive ? "active" : ""}
                onClick={() => setMenuOpen(false)} // تغلق القائمة عند الضغط
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* ✨ القسم الأيمن لسطح المكتب */}
        <div className="right-section">
          <div className="search">
            <input type="search" placeholder="What are you looking for ?" />
            <img src={searchIcon} alt="search" />
          </div>

          <div className="icons-header">
            {otherIcons.map((icon) => (
              <a key={icon.name} href="#">
                <img src={icon.src} alt={icon.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
