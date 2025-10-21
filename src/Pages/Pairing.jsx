import "./Pairing.css"
import poweredBy from "../poweredby.png"

function Pairing({navigateToSensorPage}) {
  
  return (
    <div className="pairing">
        <h1>Sensor Paired</h1>
        <button className="button" onClick={navigateToSensorPage}>Ok</button>
        <img src={poweredBy} alt="powered by"  className="powered" />
    </div>
  );
}

export default Pairing;