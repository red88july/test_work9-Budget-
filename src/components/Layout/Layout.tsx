import * as React from 'react';
import {PropsWithChildren} from 'react';
import Toolbar from '../Toolbar/Toolbar';

const Layout:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
      <header>
        <Toolbar/>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;