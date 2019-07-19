import React, { useState } from "react";
import { Row } from "react-flexbox-grid";
import { Modal } from "antd";
import BookingForm from "./BookingForm";
import Event from "./Event/Event";

const Events = ({ events }) => {
  const [formShowed, showForm] = useState(false);

  const bookEvent = () => {
    showForm(true);
  };

  return (
    <div className="container">
      <div>
        <h2 className="display-1 color-accent">Events</h2>
      </div>
      {events.map((event, index) => (
        <Row key={index} className={index % 2 != 0 && "reverse-oder"}>
          <Event
            isReversed={index % 2 != 0}
            event={event}
            onReserve={() => bookEvent(event.id)}
          />
        </Row>
      ))}

      <Modal
        title="Basic Modal"
        visible={formShowed}
        onOk={() => console.log("Ok")}
        onCancel={() => showForm(false)}
      >
        <BookingForm />
      </Modal>
    </div>
  );
};

export default Events;
