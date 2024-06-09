import React, { useEffect } from 'react';

const MathJaxComponent = ({ mathExpression }) => {
  useEffect(() => {
    window.MathJax.typeset();
  }, [mathExpression]);

  return (
    <div>
      {mathExpression && (
        <span
          dangerouslySetInnerHTML={{ __html: mathExpression }}
        />
      )}
    </div>
  );
};

export default MathJaxComponent;