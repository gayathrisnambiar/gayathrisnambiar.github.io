import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Pairing, Sensor} from './Pages'

function App() {

  const [page, setPage] = useState('pairing');

  const renderPage = () => {
    if (page === 'pairing') {
      return <Pairing navigateToSensorPage={() => setPage('sensor')} />;
    } else if (page === 'sensor') {
      return <Sensor />;
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
