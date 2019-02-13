import * as React from 'react';

import { MainHeader } from "../MainHeader";
import { Footer } from "../Footer";

export const Layout: React.SFC = ({ children }) => (
  <>
    <MainHeader />
    {children}
    <Footer />
  </>
);
