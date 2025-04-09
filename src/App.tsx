import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./styles/App.scss";

function App() {
  return (
    <>
      <main>
        <Header />
        <Projects />
        <Skills />
        <svg className="footer-svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"></path>
        </svg>
        <Footer />
      </main>
    </>
  );
}

export default App;
