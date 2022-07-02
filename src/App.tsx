import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { CssBaseline, Grid } from "@mui/material";
import Contact from "./components/Contact";
import Shop from "./components/Shop";

const sections = [
  {
    title: "HAKKIMIZDA",
    url: "#hakkimizda",
  },
  { title: "ALIŞVERİŞ", url: "#alisveris" },
  {
    title: "İLETİŞİM",
    url: "#iletisim",
  },
];

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} className="navbar-bg-grid">
          <Navbar title={"SARACE"} sections={sections} />
        </Grid>
        <Grid item xs={12}>
          <Content />
        </Grid>
        <Grid item xs={12}>
          <Shop />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
        <Grid item xs={12}>
          <Footer
            description={"Sargın Ayakkabıcılık San. ve Tic. Ltd. Şti."}
            title={"Sarace"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
