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
    <div className="BigCounter d-flex fs-1" style={{ borderRadius: '12px', border: 'solid 12px #212223', background: 'black' }}>
      <div>
      <i className="fa-solid fa-clock" style={{fontSize: '230px', marginTop:'45%', color : 'white' }}>:</i>
      </div>
      <div className="d-flex" style={{ fontSize: '300px', color: 'white' }}>
        <div className="seconds p-2">
          {seconds.toString().padStart(5, '0')}
        </div>
      </div>
    </div>
  );
}

export default SecondsCounter;
