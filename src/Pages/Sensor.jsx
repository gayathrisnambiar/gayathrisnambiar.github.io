import phone from "../pairedscreen.png"
import navbar from "../navbar.png"
import "./Sensor.css"

function Sensor() {

  return (
    <div>
      <img src={phone} alt='paired' className='sensor'/>
      <img src={navbar} alt='navbar' className='navbar'/>
    </div>
  );
}

export default Sensor;