import phone from "../paired.png"
import "./Sensor.css"

function Sensor() {

  return (
    <div>
      <img src={phone} alt='paired' className='sensor'/>
    </div>
  );
}

export default Sensor;