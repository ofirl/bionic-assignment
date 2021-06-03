import React from 'react';

import './App.css';

import MainContainer from './components/MainContainer/MainContainer';

import { ThemeProvider } from '@material-ui/core/styles';
import { custumTheme } from './CustomTheme';

import { SnackbarProvider } from 'notistack';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SnackbarProvider maxSnack={3}>
                <ThemeProvider theme={custumTheme}>
                    <MainContainer />
                </ThemeProvider>
            </SnackbarProvider>
        </QueryClientProvider>
    );
}

export default App;
