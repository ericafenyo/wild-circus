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
 * @file
 * This file contains some helper functions for accessing web services.
 *
 * To use these helper functions;
 * 1: Install axios using `yarn add axios` or `npm install axios`
 * 2: Import them into your javaScript file.
 * 3: Invoke the function of your choice and pass the required parameters.
 * @example
 *
 *  import { '<function names separated with a comma>' } from <path>;
 * const data = fetchCards()`
 *
 */

import axios from 'axios';

const BASE_URL = 'http://192.168.184.10:8080/';

/**
 * Performs an HTTP GET request using the [axios api]{@link https://github.com/axios/axios}
 * @param {string} path The URL path to be appended to the base server URL.
 * @param {object} params Optional: The URL parameters to be sent with the request.
 */
const requestData = (path, params = {}) => {
  // axios config options for making network requests
  const config = {
    baseURL: BASE_URL,
    params: { ...params }
  };
  // Perform a GET request wih the provided path and config options
  return axios.get(path, config);
};

/**
 * Performs an HTTP DELETE  request using the [axios api]{@link https://github.com/axios/axios}
 * @param {string} path The URL path to be appended to the base server URL.
 * @param {object} params Optional: The URL parameters to be sent with the request.
 */
const deleteData = (path, params = {}) => {
  // axios config options for making network requests
  const config = {
    baseURL: BASE_URL,
    params: { ...params }
  };
  // Perform a GET request wih the provided path and config options
  return axios.delete(path, config);
};

/**
 * Get a list of events.
 *
 * This function doesn't have any built in error handling.
 * Try to invoked it within a try-catch block or any other means.
 *
 * @param {function} callback A function that receives the parsed HTTP
 *  response as an argument.
 */
const fetchEvents = async callback => {
  const path = '/events';
  const response = await requestData(path);
  // The request was successful. Pass it to the callback function.
  callback(response.data);
};

/**
 *  Get a list of events.
 *
 * This function doesn't have any built in error handling.
 * Try to invoked it within a try-catch block or any other means.
 *
 * @param {function} callback A function that receives the parsed HTTP
 *  response as an argument.
 */
const fetchEventsAsync = async () => {
  const path = '/events';
  const response = await requestData(path);
  // The request was successful. Pass it to the callback function.
  return response.data;
};

export { fetchEvents, fetchEventsAsync };
