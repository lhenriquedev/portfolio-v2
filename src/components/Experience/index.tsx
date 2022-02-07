import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";

import "./index.scss";

export function TabsContainer() {
  return (
    <section className="tabs">
      <div className="tabs__container">
        <h3>Experiência</h3>
        <Tabs>
          <TabList>
            <Tab>
              <p>Digital Business</p>
            </Tab>
            <Tab>
              <p>Prefeitura Butiá</p>
            </Tab>
            <Tab>
              <p>Câmara de Vereadores</p>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="panel-content">
              <div className="panel-header">
                <p>Desenvolvedor Frontend Jr.</p>
                <span>Out 2021 - Atual</span>
              </div>

              <div className="panel-info">
                <span>Digital Business</span>
                <p>
                  Apoio na criação, animação e adaptação de banners em HTML,
                  focados para publicidade digital em websites e mobiles.
                </p>

                <strong>Tecnologias: HTML, CSS, JavaScript</strong>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <div className="panel-header">
                <p>Recepcionista.</p>
                <span>Out 2021</span>
              </div>

              <div className="panel-info">
                <span>Prefeitura Municipal de Butiá</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, dolor quo harum tenetur deserunt minima et! Expedita
                  dignissimos quam nulla praesentium veniam atque temporibus
                  eligendi ipsam? Eos vero dicta a.
                </p>

                <strong>Tecnologias: HTML, CSS, JavaScript</strong>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <div className="panel-header">
                <p>Desenvolvedor Frontend Jr.</p>
                <span>Out 2021 - Atual</span>
              </div>

              <div className="panel-info">
                <span>Digital Business</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  suscipit amet ad eaque quidem error doloribus corrupti in!
                  Aperiam sint explicabo nihil debitis neque numquam in ipsum
                  tempore ipsa? Velit?
                </p>

                <strong>Tecnologias: HTML, CSS, JavaScript</strong>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
}
