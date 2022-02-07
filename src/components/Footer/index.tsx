import logoSVG from "../../assets/logo-codelandia.svg";

import "./index.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>&copy; 2022 - Luiz Henrique</p>
        <p>
          <span>Powered by</span>
          <img src={logoSVG} alt="logo da codelândia" />
        </p>
      </div>
    </footer>
  );
}
