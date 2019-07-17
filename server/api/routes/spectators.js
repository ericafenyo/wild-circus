const express = require('express');

const status = require('./statusCodes');
const db = require('../../config');

const router = express.Router();

// Get all spectators.
router.get('/', (request, response, next) => {
  db.query('SELECT * FROM spectator', (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }
    response.json(result);
  });
});

// Get a single spectator.
router.get('/:spectatorId', (request, response, next) => {
  const { spectatorId } = request.params;

  db.query('SELECT * FROM spectator WHERE id = ?', spectatorId, (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }

    response.json(result);
  });
});

// Add a spectator to the database.
router.post('/', (request, response, next) => {
  const data = request.body;
  console.log(data);

  db.query('INSERT INTO spectator SET ?', data, (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }
    response.sendStatus(status.SUCCESS);
  });
});

// Update a spectator.
router.put('/:spectatorId', (request, response, next) => {
  const data = request.body;
  const { spectatorId } = request.params;
  db.query(
    'UPDATE spectator SET ? WHERE id = ?',
    [data, spectatorId],
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

// Delete an spectator.
router.delete('/:spectatorId', (request, response, next) => {
  const { spectatorId } = request.params;

  db.query('DELETE FROM spectator WHERE id = ?', [spectatorId], (error, result) => {
    if (error) {
      console.log(error);
      response.status(status.SERVER_ERROR).send(status.SERVER_ERROR_MESSAGE);
      return;
    }
    response.sendStatus(status.SUCCESS);
  });
});

module.exports = router;
