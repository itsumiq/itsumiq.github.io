import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRouter } from './app/routers/AppRouter';

import { persistor, store } from './app/store/store';
import './app/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Home /> */}
        <AppRouter />
      </PersistGate>
    </Provider>
  </StrictMode>
);
