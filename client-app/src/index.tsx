import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import './index.css';
import App from './app/layout/App';
import { store, StoreContext } from 'app/stores/store';
import { CustomRouter } from 'app/utilities/customRouter';
import customHistory from 'app/utilities/history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <CustomRouter history={customHistory}>
      <App />
    </CustomRouter>
  </StoreContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
