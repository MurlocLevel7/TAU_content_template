import React from 'react';
import './components.css';

const InfoBox = ({ children, title }) => {
  return (
    <div className="info-box">
      {title && <div className="info-box-title">{title}</div>}
      <div className="info-box-content">{children}</div>
    </div>
  );
};

export default InfoBox;
