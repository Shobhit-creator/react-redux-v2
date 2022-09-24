import React from 'react'
import { Provider } from 'react-redux'

import store from './store/store';
import Card from './components/Card'


function App() {
  return (
    <Provider store={store}>
      <Card/>
    </Provider>
  );
}

export default App;