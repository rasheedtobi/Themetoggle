import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ThemedContent from './ThemedContent';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Your React App</h1>
        <ThemedContent />
      </div>
    </Provider>
  );
};

export default App;
