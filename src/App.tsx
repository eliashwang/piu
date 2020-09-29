import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';
import { AuthProvider } from './hooks/useAuth';

import GlobalStyle from '../src/assets/styles/global';



const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes/>
        <GlobalStyle/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
