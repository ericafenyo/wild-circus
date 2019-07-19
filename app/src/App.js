import React from "react";
import "./App.css";
import { fetchEvents } from "./data/source";
import Home from "./components/Home/Home";

const App = () => {
  fetchEvents(events => console.log(events));

  return <Home />;
};

export default App;
