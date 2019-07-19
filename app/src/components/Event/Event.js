import React, { Fragment, useState } from "react";
import { Row, Col } from "react-flexbox-grid";
import "../css/event.css";
import dispatchIcon from "../../assets/images/dispatch.svg";

const Event = ({ event, isReversed, onReserve }) => {
  const { title, description, address, image, price, createdAt } = event;

  const tilesDirection = isReversed ? "right" : "left";
  const tileStyle = {
    float: tilesDirection
  };

  return (
    <Fragment>
      <Col md={6} className="p-0" style={{ zIndex: 1 }}>
        <div className="event-shadow">
          <img
            src="https://images.unsplash.com/photo-1504505278590-428d1acd0f07?w=800&h=800"
            alt="event thumbnail"
            className="element-fluid"
          />
        </div>
      </Col>

      <Col md={6} className="p-0">
        <div className="event-tile event-info" style={tileStyle}>
          <div className="event-tile-content">
            <h3 className="header-3">LA MARCHE DES ÉLÉPHANTS</h3>
            <p className="body-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              nobis molestias unde.
            </p>
            <p className="body-text">Date : Tue, Sep 10, 9:00am</p>
            <p className="body-text">Address : CCI Nantes, Nantes</p>
          </div>
        </div>
        <div className="event-tile" style={tileStyle} />
        <div className="event-tile" style={tileStyle} />
        <div className="event-tile event-action" style={tileStyle}>
          <div className="event-tile-content">
            <span>
              <a href="#" className="button-reserve">
                <img src={dispatchIcon} alt="icon" />
                <span>Reserve</span>
              </a>
            </span>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default Event;
