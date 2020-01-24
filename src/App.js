import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './sytles/global'
import Header from './components/Header'
import RoutePages from './components/RoutePages'
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <RoutePages />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
