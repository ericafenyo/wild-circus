import React, { useState, useEffect } from 'react';
import { Form, Input, InputNumber } from 'antd';

const BookingForm = () => {
  const [user, setUser] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let pricePerChild = 4.5;
    let pricePerAdult = 16.0;
    const children = user.children;
    const adults = user.adult;

    if (adults >= 10) {
      pricePerAdult = 10.0;
    }
    const totalPrice = pricePerChild * children + pricePerAdult * adults;
    setPrice(totalPrice);

    // TODO: Compute price based on the calender.

    const currentDate = Date.now();
  }, [user]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const computePrice = params => {
    // const { name, value } = target;
    // setUser({ ...user, [name]: value });
    console.log(params);
  };

  console.log(user);

  return (
    <div>
      <Form>
        <p>Your information</p>
        <Form.Item>
          <Input
            onChange={handleChange}
            value={user.name}
            placeholder='Enter full name'
            name='name'
          />
        </Form.Item>

        <Form.Item>
          <Input
            onChange={handleChange}
            value={user.email}
            placeholder='Email'
            name='email'
          />
        </Form.Item>

        <Form.Item label='Adult'>
          <InputNumber
            onChange={value => setUser({ ...user, adult: value })}
            min={1}
            defaultValue={1}
            name='adult'
          />
        </Form.Item>

        <Form.Item label='Children'>
          <InputNumber
            onChange={value => setUser({ ...user, children: value })}
            min={0}
            defaultValue={0}
            name='children'
          />
        </Form.Item>
        <p>Payment details</p>
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          <Input placeholder='Card number' id='error' />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
          >
            <Input placeholder='MM/YY' id='error' />
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
          >
            <Input placeholder='CVV' id='error' />
          </Form.Item>

          <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
          >
            <Input placeholder='Postal' id='error' />
          </Form.Item>
        </Form.Item>

        <div>
          <p>{`Price: $${price.toFixed(2)}`}</p>
        </div>
      </Form>
    </div>
  );
};

export default BookingForm;
