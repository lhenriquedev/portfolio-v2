import { useEffect, useState } from "react";

import { Button } from "../Button";

import LoadingIcons from "react-loading-icons";

import linkSVG from "../../assets/link.svg";

import "./index.scss";

interface RepoProps {
  owner: string;
  repo: string;
  link: string;
  image: string;
  website: string;
  language: string;
  description: string;
}

export function Projects() {
  const [repo, setRepo] = useState<RepoProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://gh-pinned-repos.egoist.sh/?username=lhenriquedev`)
      .then((response) => response.json())
      .then((data) => setRepo(data))
      .then(() => setLoading(false));
  }, []);

  if (loading) return <LoadingIcons.SpinningCircles />;

  return (
    <section className="projects">
      <h2>Projetos</h2>

      <div className="projects__container">
        {repo.map((repo) => (
          <div className="projects__project" key={repo.repo}>
            <img
              src={repo.image}
              alt={repo.description ?? "Projeto tirado do github"}
            />

            <div className="projects__project-text-box">
              <h3>{repo.repo}</h3>
              <p>
                {repo.description ? repo.description : "Não tem descrição."}
              </p>
              <span>Tecnologias usadas no projeto: {repo.language}</span>

              <Button
                image={linkSVG}
                className="button button--pink"
                name="Visualizar"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
