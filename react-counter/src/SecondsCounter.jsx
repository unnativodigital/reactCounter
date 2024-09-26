import React, { useEffect, useState } from 'react';
import './App.css';

function SecondsCounter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    
    return () => clearInterval(timerId); // Limpiar el intervalo al desmontar
  }, []);

  return (
<div className="BigCounter d-flex align-items-center justify-content-center" style={{ borderRadius: '12px', border: 'solid 12px #212223', background: 'black', padding: '10px', width: '100%' }}>
  <i className="fa-solid fa-clock" style={{ fontSize: '15vw', color: 'white', marginRight: '10px' }}></i>
  <div className="d-flex" style={{ fontSize: '20vw', color: 'white' }}>
    <div className="seconds p-2">
      {seconds.toString().padStart(6, '0')}
    </div>
  </div>
</div>


  );
}

export default SecondsCounter;
