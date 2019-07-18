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
      'https://images.unsplash.com/photo-1475738384599-8cf3db232ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=4015&q=80',
    price: 80,
    createdAt: Date.now()
  }
];

const App = () => {
  fetchEvents(events => console.log(events));


  return (
    <div className="home">
      {/* <Events events={events} />; */}
  </div>
  );
}

export default App;
