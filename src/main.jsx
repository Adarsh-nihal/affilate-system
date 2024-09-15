import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import theme from './theme/theme.js'; // Adjust the path as necessary
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
 
 <BrowserRouter >
    <App />
  </BrowserRouter>
  </Provider>
  </ChakraProvider>
 
)
