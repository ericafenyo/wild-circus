/**
 * @license
 * Copyright (c) 2019 Eric Afenyo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @file Contains set of endpoints(urls) that correspond to HTTP
 * methods(GET, POST, PUT and DELETE).
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const bookings = require('./api/routes/bookings');
const events = require('./api/routes/events');
const spectators = require('./api/routes/spectators');

const app = express();

// Allows cross-domain communication from the browser.
app.use(cors({ origin: '*' }));

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Root route
app.get('/', (request, response) => {
  response.sendStatus(200);
});

// Delegate all requests to /projects to the `projects` routes.
app.use('/bookings', bookings);

// Delegate all requests to /list to the `lists` routes.
app.use('/events', events);

// Delegate all requests to /tasks to the `tasks` routes.
app.use('/spectators', spectators);

module.exports = app;
