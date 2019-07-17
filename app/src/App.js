import React from 'react';
import './App.css';
import { fetchEvents } from './data/source';
import Events from './components/Events';

const events = [
  {
    id: 1,
    title: 'VARCHAR(255) NOT NULL',
    description: 'TEXT NOT NULL',
    address: 'VARCHAR(255) NOT NULL',
    image:
      'https://images.unsplash.com/photo-1435034568314-8303dbda4b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    price: 80,
    createdAt: Date.now()
  }
];

function App() {
  fetchEvents(events => console.log(events));

  return <Events events={events} />;
}

export default App;
