import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";

function App() {
  return (
    <>
      <div id="content-container">
        <Header />
        <Content />
      </div>

      <Footer />
    </>
  );
}

export default App;
