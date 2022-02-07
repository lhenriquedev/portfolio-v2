import "./index.scss";

import githubSVG from "../../assets/github.svg";
import twitchSVG from "../../assets/twitch.svg";
import twitterSVG from "../../assets/twitter.svg";
import linkedinSVG from "../../assets/linkedin.svg";
import downloadSVG from "../../assets/download-cloud.svg";
import mailSVG from "../../assets/mail.svg";

import { Button } from "../Button";

export function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image-box">
          <p className="about__photo">NOT YET :(</p>
        </div>
        <div className="about__text-box">
          <div className="about__text-box-info">
            <h3>SOBRE MIM</h3>
            <span>Butiá, RS - Brasil</span>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              id egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean
              ac commodo dolor, nec bibendum velit.
            </p>
          </div>

          <div className="about__text-box-social">
            <img src={linkedinSVG} alt="Linkedin logo" />
            <img src={twitterSVG} alt="Twitter logo" />
            <img src={githubSVG} alt="Github logo" />
            <img src={twitchSVG} alt="Twitch logo" />
          </div>

          <div className="about__text-box-cta">
            <Button
              className="button button--pink"
              imagePath={downloadSVG}
              title="Currículo"
            />
            <Button
              className="button button--purple"
              imagePath={mailSVG}
              title="Email"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
