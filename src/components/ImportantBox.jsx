import React from 'react';
import './components.css';

const ImportantBox = ({ children }) => {
  return (
    <div className="ImportantBox">
      {children}
    </div>
  );
};

export default ImportantBox;