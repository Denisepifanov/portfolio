import "./styles/main.css";


import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
       <Navbar />
       <Header />

       <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap, StyledComponents</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS</p>
                    </li>
                </ul>

        </div>
       </main>
       <Footer />
       </div>
  );
}

export default App;
