import { useTheme } from "../../context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

import "./index.scss";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="header">
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
    </header>
  );
}
