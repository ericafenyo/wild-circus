const express = require('express');

const status = require('./statusCodes');
const db = require('../../config');

const router = express.Router();

// Get all bookings.
router.get('/', (request, response, next) => {
  db.query('SELECT * FROM booking', (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }
    response.json(result);
  });
});

// Get a single booking.
router.get('/:bookingId', (request, response, next) => {
  const { bookingId } = request.params;

  db.query('SELECT * FROM booking WHERE id = ?', bookingId, (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }

    response.json(result);
  });
});

// Add a booking to the database.
router.post('/', (request, response, next) => {
  const data = request.body;
  console.log(data);

  db.query('INSERT INTO booking SET ?', data, (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }
    response.sendStatus(status.SUCCESS);
  });
});

// Update a booking.
router.put('/:bookingId', (request, response, next) => {
  const data = request.body;
  const { bookingId } = request.params;
  db.query(
    'UPDATE booking SET ? WHERE id = ?',
    [data, bookingId],
    (error, result) => {
      if (error) {
        console.log(error);
        response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
        return;
      }
      console.log(result);

      response.sendStatus(status.SUCCESS);
    }
  );
});

// Delete an booking.
router.delete('/:bookingId', (request, response, next) => {
  const { bookingId } = request.params;

  db.query('DELETE FROM booking WHERE id = ?', [bookingId], (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }
    response.sendStatus(status.SUCCESS);
  });
});

module.exports = router;
