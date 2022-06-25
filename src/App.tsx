import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="xl" className="container">
        <Navbar title={"Sarace"} sections={[]} />
        <Content />
        <Footer description={"Go"} title={"Sarace"} />
      </Container>
    </div>
  );
}

export default App;
