import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { Router } from './router/Router';

const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: 'Poppins, sans-serif',
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
