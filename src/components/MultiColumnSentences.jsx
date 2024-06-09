import React from 'react';
import PropTypes from 'prop-types';
import './components.css';

const MultiColumnSentences = ({ children }) => {
  const columnWrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    margin: '0 auto',
    padding: '0px',
  };

  const columnStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const pStyle = {
    padding: '0px 0px',
  };

  return (
    <div className="multi-column-sentences" style={columnWrapperStyle}>
      {React.Children.map(children, (column, columnIndex) => (
        <div key={columnIndex} className="column" style={columnStyle}>
          {React.Children.map(column.props.children, (sentence, sentenceIndex) => (
            <p style={pStyle} key={sentenceIndex}>{sentence}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

MultiColumnSentences.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MultiColumnSentences;
