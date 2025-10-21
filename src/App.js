import './App.css';
import { useRef, useState } from 'react';
import {Pairing, Sensor} from './Pages'

function App() {

  const [showPairing, setShowPairing] = useState(true);
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef && audioRef.current.play();
  }

  const renderPage = () => {
    return (
      <div className="renderPage">
        {showPairing && <Pairing navigateToSensorPage={() => {setShowPairing(false); playAudio();}} />}
        <Sensor />
        <audio ref={audioRef} src="/chime.mp3" />
      </div>
    )
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
