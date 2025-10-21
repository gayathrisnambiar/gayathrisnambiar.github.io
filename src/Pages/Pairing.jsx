import "./Pairing.css"

function Pairing({navigateToSensorPage}) {
  return (
    <div className="pairing">
        <h1>Sensor Paired</h1>
        <button className="button" onClick={navigateToSensorPage}>Ok</button>
    </div>
  );
}

export default Pairing;