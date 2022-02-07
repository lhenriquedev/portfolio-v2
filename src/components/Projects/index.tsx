import { Button } from "../Button";

import linkSVG from "../../assets/link.svg";

import "./index.scss";

export function Projects() {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <div className="projects__container">
        {/* 0 */}
        <div className="projects__project">
          <div className="projects__project-image-box">
            <span>Foto</span>
          </div>
          <div className="projects__project-text-box">
            <h3>Nome do projeto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit interdum odio eu varius.
            </p>
            <span>Tecnologias usadas no projeto</span>

            <Button
              imagePath={linkSVG}
              className="button button--purple"
              title="Visualizar"
            />
          </div>
        </div>
        {/* 1 */}
        <div className="projects__project">
          <div className="projects__project-image-box">
            <span>Foto</span>
          </div>
          <div className="projects__project-text-box">
            <h3>Nome do projeto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit interdum odio eu varius.
            </p>
            <span>Tecnologias usadas no projeto</span>

            <Button
              imagePath={linkSVG}
              className="button button--purple"
              title="Visualizar"
            />
          </div>
        </div>
        {/* 2 */}
        <div className="projects__project">
          <div className="projects__project-image-box">
            <span>Foto</span>
          </div>
          <div className="projects__project-text-box">
            <h3>Nome do projeto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit interdum odio eu varius.
            </p>
            <span>Tecnologias usadas no projeto</span>

            <Button
              imagePath={linkSVG}
              className="button button--purple"
              title="Visualizar"
            />
          </div>
        </div>
        {/* 3 */}
        <div className="projects__project">
          <div className="projects__project-image-box">
            <span>Foto</span>
          </div>
          <div className="projects__project-text-box">
            <h3>Nome do projeto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit interdum odio eu varius.
            </p>
            <span>Tecnologias usadas no projeto</span>

            <Button
              imagePath={linkSVG}
              className="button button--purple"
              title="Visualizar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
