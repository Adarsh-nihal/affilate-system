import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import theme from './theme/theme.js'; // Adjust the path as necessary
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
 <BrowserRouter >
    <App />
  </BrowserRouter>
  </ChakraProvider>
 
)
