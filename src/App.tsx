import React from 'react';
import AppTheme from './theme/AppTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from './pages/Layout'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <ThemeProvider theme={AppTheme}>
            <Router>
                <Layout/>
            </Router>
        </ThemeProvider>
    );
}

export default App;
