import { About } from "../../components/About";
import { Hero } from "../../components/Hero";
import { Projects } from "../../components/Projects";
import { TabsContainer } from "../../components/Experience";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <TabsContainer />
      <Projects />
    </>
  );
}
