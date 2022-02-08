import { useTheme } from "../../context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import "./index.scss";
import { useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);

  const toggleResponsive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <header className={isActive ? "header nav-open" : "header"}>
      <span className="header__logo">Henrique</span>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#experience">Experiência</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              disabled
            >
              {theme === "dark" ? (
                <FiSun
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              ) : (
                <FiMoon
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              )}
            </button>
          </li>
        </ul>
      </nav>
      {/* FIX: Arrumar o menu mobile */}
      <button className="btn-mobile" onClick={toggleResponsive}>
        <IoMenuOutline className="icon-mobile" name="menu-outline" />
        <IoCloseOutline className="icon-mobile" name="close-outline" />
      </button>
    </header>
  );
}
