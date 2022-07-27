import "./scss/reset.scss";
import "./scss/App.scss";

import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <div className="App">
      <>
        <Header />
        <Skills />
        <Contact />
      </>
    </div>
  );
};
