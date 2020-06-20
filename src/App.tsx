import React from 'react';
import AppTheme from './theme/AppTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from './pages/Layout'

function App() {
  return (
      <ThemeProvider theme={AppTheme}>
        <Layout />
      </ThemeProvider>
  );
}

export default App;
