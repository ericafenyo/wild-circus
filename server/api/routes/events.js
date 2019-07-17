const express = require('express');

const status = require('./statusCodes');
const db = require('../../config');

const router = express.Router();

// Get all events.
router.get('/', (request, response, next) => {
  db.query('SELECT * FROM event', (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }
    response.json(result);
  });
});

// Get a single of event.
router.get('/:eventId', (request, response, next) => {
  const { eventId } = request.params;

  db.query('SELECT * FROM event WHERE id = ?', eventId, (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }

    response.json(result);
  });
});

// Add a event into a database.
router.post('/', (request, response, next) => {
  const data = request.body;
  console.log(data);

  db.query('INSERT INTO event SET ?', data, (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }
    response.sendStatus(status.SUCCESS);
  });
});

// Update a event.
router.put('/:eventId', (request, response, next) => {
  const data = request.body;
  const { eventId } = request.params;
  db.query(
    'UPDATE event SET ? WHERE id = ?',
    [data, eventId],
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

// Delete an event.
router.delete('/:eventId', (request, response, next) => {
  const { eventId } = request.params;

  db.query('DELETE FROM event WHERE id = ?', [eventId], (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }
    response.sendStatus(status.SUCCESS);
  });
});

module.exports = router;
