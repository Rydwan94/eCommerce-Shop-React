import { HashRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Pages from "./Pages";
import Footer from "./Footer";

import "../css/App.css";

import { Provider } from "react-redux";
import store from "../store/store";
import Header from "./Header";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <main>
            <aside>
              <Navbar />
            </aside>
            <section className="pages">
              <header>
                <Header />
              </header>
              <Pages />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
