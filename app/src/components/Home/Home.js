import React from "react";
import PropTypes from "prop-types";
import Events from "../Events";
import "../css/home.css";

const events = [
  {
    id: 1,
    title: "VARCHAR(255) NOT NULL",
    description: "TEXT NOT NULL",
    address: "VARCHAR(255) NOT NULL",
    image:
      "https://images.unsplash.com/photo-1475738384599-8cf3db232ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=4015&q=80",
    price: 80,
    createdAt: Date.now()
  },
  {
    id: 1,
    title: "VARCHAR(255) NOT NULL",
    description: "TEXT NOT NULL",
    address: "VARCHAR(255) NOT NULL",
    image:
      "https://images.unsplash.com/photo-1475738384599-8cf3db232ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=4015&q=80",
    price: 80,
    createdAt: Date.now()
  },
  {
    id: 1,
    title: "VARCHAR(255) NOT NULL",
    description: "TEXT NOT NULL",
    address: "VARCHAR(255) NOT NULL",
    image:
      "https://images.unsplash.com/photo-1475738384599-8cf3db232ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=4015&q=80",
    price: 80,
    createdAt: Date.now()
  },
  {
    id: 1,
    title: "VARCHAR(255) NOT NULL",
    description: "TEXT NOT NULL",
    address: "VARCHAR(255) NOT NULL",
    image:
      "https://images.unsplash.com/photo-1475738384599-8cf3db232ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=4015&q=80",
    price: 80,
    createdAt: Date.now()
  }
];

const Home = props => {
  return <div className="home">{<Events events={events} />}</div>;
};

Home.propTypes = {};

export default Home;
