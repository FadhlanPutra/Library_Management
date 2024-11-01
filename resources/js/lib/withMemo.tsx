import React from 'react';
import { ReactNode, PropsWithChildren } from 'react';
import { JSX } from 'react/jsx-runtime';


// Higher-Order Component
const withMemo = (Component: { ({ header, children, }: PropsWithChildren<{ header?: ReactNode; }>): JSX.Element; (): JSX.Element; }) => {
  return React.memo(Component);
};

export default withMemo;