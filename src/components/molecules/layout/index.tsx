import React, { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>{children}</div>
  );
};

export default Layout;

//<div>{children}</div>