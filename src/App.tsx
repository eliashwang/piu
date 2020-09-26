import React from 'react';
import Routes from './routes';

import { AuthProvider } from './hooks/useAuth';

import GlobalStyle from '../src/assets/styles/global';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes/>
      <GlobalStyle/>
    </AuthProvider>
  );
}

export default App;
