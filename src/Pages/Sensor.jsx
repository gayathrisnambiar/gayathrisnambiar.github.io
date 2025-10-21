import { useRef, useEffect } from 'react';
import phone from "../paired.png"
import "./Sensor.css"

function Sensor() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef && audioRef.current.play();
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/chime.mp3" />
      <img src={phone} alt='paired' className='paired'/>
    </div>
  );
}

export default Sensor;