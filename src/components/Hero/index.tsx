import "./index.scss";

import heroSvg from "../../assets/hero.png";

import githubSvg from "../../assets/github.svg";
import linkedinSvg from "../../assets/linkedin.svg";

import { Button } from "../Button";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__text-box">
        <span>🤟Olá, eu sou</span>
        <h1>Luiz Henrique</h1>
        <p>Desenvolvedor Front-end & UI Design Enthusiastic</p>

        <div className="hero__cta">
          <Button
            className="button button--purple"
            image={githubSvg}
            name="Github"
          />
          <Button
            className="button button--pink"
            image={linkedinSvg}
            name="Linkedin"
          />
        </div>
      </div>
      <div className="hero__image-box">
        <img
          className="hero-image"
          src={heroSvg}
          alt="Hero that contains a looper illustration."
          loading="lazy"
        />
      </div>
    </section>
  );
}
