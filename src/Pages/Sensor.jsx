import { useRef, useEffect } from 'react';

function Sensor() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef && audioRef.current.play();
  }, []);

  return (
    <div>
      <h1>Sensor Page</h1>
      <audio ref={audioRef} src="/chime.mp3" />
    </div>
  );
}

export default Sensor;