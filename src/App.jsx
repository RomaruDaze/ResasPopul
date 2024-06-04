import React from "react";
import Header from "./components/Home/Header";
import Body from "./components/Home/Body";
import Footer from "./components/Home/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <Header />
      </header>
      <body className="body">
        <Body />
      </body>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
