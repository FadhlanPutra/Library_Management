import React from 'react';

// Higher-Order Component
const withMemo = (Component) => {
  return React.memo(Component);
};

export default withMemo;