import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { Router } from './router/Router';

const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: 'Greycliff CF, sans-serif',
  colors: {
    'light-blue': [
      '#e0fbff',
      '#cbf2ff',
      '#9ae2ff',
      '#64d2ff',
      '#3cc5fe',
      '#23bcfe',
      '#09b8ff',
      '#00a1e4',
      '#0090cd',
      '#007cb5',
    ],
    'ocean-blue': [
      '#7AD1DD',
      '#5FCCDB',
      '#44CADC',
      '#2AC9DE',
      '#1AC2D9',
      '#11B7CD',
      '#09ADC3',
      '#0E99AC',
      '#128797',
      '#147885',
    ],
    'deep-blue': [
      '#ebefff',
      '#d5dafc',
      '#a9b1f1',
      '#7b87e9',
      '#5362e1',
      '#3a4bdd',
      '#2d3fdc',
      '#1f32c4',
      '#182cb0',
      '#0b259c',
    ],
    'bright-pink': [
      '#F0BBDD',
      '#ED9BCF',
      '#EC7CC3',
      '#ED5DB8',
      '#F13EAF',
      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',
    ],
  },
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
