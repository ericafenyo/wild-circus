import React, { useState } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Card, Icon, Button, Modal } from 'antd';
import BookingForm from './BookingForm';

const { Meta } = Card;

const Event = ({ event, onReserve }) => {
  const { title, description, address, image, price, createdAt } = event;

  return (
    <Col>
      <Card
        style={{ width: '100%' }}
        cover={<img alt='example' src={image} />}
        actions={[
          <Button onClick={onReserve} type='primary'>
            Reserve
          </Button>
        ]}
      >
        <Meta title={title} description={description} />
      </Card>
    </Col>
  );
};

const Events = ({ events }) => {
  const [formShowed, showForm] = useState(false);

  const bookEvent = () => {
    showForm(true);
  };

  return (
    <Row>
      <div className='container'>
        {events.map((event, index) => (
          <Event
            event={event}
            key={index}
            onReserve={() => bookEvent(event.id)}
          />
        ))}

        <Modal
          title='Basic Modal'
          visible={formShowed}
          onOk={() => console.log('Ok')}
          onCancel={() => showForm(false)}
        >
          <BookingForm />
        </Modal>
      </div>
    </Row>
  );
};

export default Events;
