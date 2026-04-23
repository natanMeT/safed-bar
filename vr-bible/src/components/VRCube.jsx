import React from 'react';
import './VRCube.css';

const VRCube = () => {
  const faces = ['vr-front', 'vr-back', 'vr-right', 'vr-left', 'vr-top', 'vr-bottom'];

  return (
    <div className="vr-3d-wrapper">
      <div className="vr-light-1" />
      <div className="vr-light-2" />
      <div className="vr-3d-inner">
        {faces.map((face, i) => (
          <div key={i} className={`vr-face ${face}`}>
            <img src="/images/vr-headset.png" alt="VR Headset" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VRCube;
